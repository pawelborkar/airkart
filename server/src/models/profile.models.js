import { Schema, model } from 'mongoose';
import User from './user.models.js';

const ProfileSchema = new Schema(
  {
    fullname: {
      type: String,
      require: [true, 'Please enter your full name.'],
    },
    countryCode: {
      type: String,
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
    phoneNumber: {
      type: Number,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Profile', ProfileSchema);
