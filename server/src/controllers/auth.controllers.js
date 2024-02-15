import { asyncHandler } from '../middlewares/asyncHandler.middlewares.js';
import User from '../models/user.models.js';
import Profile from '../models/profile.models.js';
import ErrorResponse from '../utils/errorResponse.js';
import { RESPONSE } from '../utils/responseMessages.js';

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
      .json({ success: false, message: RESPONSE.USER_ALREADY_EXISTS });
  }

  const user = await User.create({
    fullname,
    email,
    password,
  });

  await Profile.create({
    owner: user._id, // Reference the user's ObjectId
    fullname,
    email,
  });

  sendTokenResponse(user, 201, res, RESPONSE.SIGNUP);
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
    return next(new ErrorResponse(RESPONSE.SIGNIN_ERROR, 400));
  }

  // Check for a registered user
  const user = await User.findOne({
    $or: [{ email: email }, { password: password }],
  }).select('+password');

  if (!user) {
    return next(new ErrorResponse(RESPONSE.INVALID, 401));
  }

  // Check if the password matches or not
  const isMatched = await user.matchPassword(password);

  if (!isMatched) {
    return next(new ErrorResponse(RESPONSE.INCORRECT_PASSWORD, 401));
  }

  sendTokenResponse(user, 200, res, RESPONSE.SIGNIN + user.fullname);
});

/*
@desc: Sign Out as an user
@Author: Pawel Borkar
@route: POST /api/v1/auth/logout
@access: Private
*/
const logOut = asyncHandler(async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: RESPONSE.LOGOUT,
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
