/*
Controller: profile
*/
import { asyncHandler } from '../middlewares/asyncHandler.middlewares.js';
import ErrorResponse from '../utils/errorResponse.js';
import Profile from '../models/profile.models.js';
import { responseMessages } from '../utils/responseMessages.js';
/*
@desc: Get user profile
@Author: Pawel Borkar
@route: POST /api/v1/profile
@access: Private
*/
const getUserProfile = asyncHandler(async (req, res, next) => {
  const userId = req.body.userId;
  const profile = await Profile.findOne({ owner: userId });

  if (!profile) {
    return next(new ErrorResponse(responseMessages.userNotExist, 404));
  }
  next();
  return res.status(200).json({
    success: true,
    profile,
  });
});

export { getUserProfile };
