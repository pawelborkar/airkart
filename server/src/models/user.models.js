import crypto from 'node:crypto';
import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema(
  {
    avatar: {
      type: {
        url: String,
        localPath: String,
      },
      default: {
        url: 'https://via.placeholder.com/200x200.png',
        localPath: '',
      },
    },
    fullname: {
      type: String,
      required: [true, 'Please enter a full name.'],
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email',
      ],
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minlength: 8,
      select: false,
    },
    role: {
      type: String,
      required: true,
      default: 'user',
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  // Create salt
  const salt = await bcrypt.genSalt(11);
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign JSONWebTokens and return
UserSchema.methods.getSignedJWT = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate and hash the password token
UserSchema.methods.getResetPasswordToken = async function () {
  // Generate the token
  const resetToken = crypto.randomBytes(21).toString('hex');

  // Hash token and set to resetPasswordToken field
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // Set expiration time to 10 mins
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

export default model('User', UserSchema);
