import { asyncHandler } from '../middlewares/asyncHandler.middlewares.js';
import User from '../models/user.models.js';
import ErrorResponse from '../utils/errorResponse.js';
import { responseMessages } from '../utils/responseMessages.js';

/*
@desc: Sign Up as an user
@Author: Pawel Borkar
@route: POST /api/v1/auth/signup
@access: Public
*/
const signUp = asyncHandler(async (req, res) => {
  const { fullname, email, password } = req.body;

  // Before creating a new user
  const userExists = await User.findOne({
    $or: [{ email }],
  });

  if (userExists) {
    return res
      .status(400)
      .json({ success: false, message: responseMessages.userAlreadyExists });
  }

  const user = await User.create({
    fullname,
    email,
    password,
  });
  sendTokenResponse(user, 201, res, responseMessages.signUp);
});

/*
@desc: Sign In as an user
@Author: Pawel Borkar
@route: POST /api/v1/auth/signin
@access: Public
*/
const signIn = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email  and password
  if (!email || !password) {
    return next(new ErrorResponse(responseMessages.signInError, 400));
  }

  // Check for a registered user
  const user = await User.findOne({
    $or: [{ email: email }, { password: password }],
  }).select('+password');

  if (!user) {
    return next(new ErrorResponse(responseMessages.invalid, 401));
  }

  // Check if the password matches or not
  const isMatched = await user.matchPassword(password);

  if (!isMatched) {
    return next(new ErrorResponse(responseMessages.incorrectPassword, 401));
  }

  sendTokenResponse(user, 200, res, responseMessages.signIn + user.fullname);
});

/*
@desc: Sign Out as an user
@Author: Pawel Borkar
@route: POST /api/v1/auth/logout
@access: Private
*/
const logOut = asyncHandler(async (req, res, next) => {
  await User.findByIdAndUpdate(
    req.user.id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    { new: true }
  );
  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  res
    .status(200)
    .clearCookie('token', options)
    .clearCookie('refreshToken', options)
    .json({
      success: true,
      message: responseMessages.logOut,
    });
});

// Helper for getting the token from model, create coookie and send response
const sendTokenResponse = (user, statusCode, res, message) => {
  // Create token
  const token = user.getSignedJWT();

  // Options for cookie generation
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
  };

  // Enable security property (https) for production
  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res.status(statusCode).cookie('token', token, options).json({
    success: true,
    message,
    token,
  });
};

export { signUp, signIn, logOut };
