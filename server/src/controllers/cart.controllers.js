import { asyncHandler } from '../middlewares/asyncHandler.middlewares.js';
import { Cart } from '../models/cart.models.js';
import User from '../models/user.models.js';
import ErrorResponse from '../utils/errorResponse.js';
import { RESPONSE } from '../utils/responseMessages.js';

/*
@desc: Get all products from the cart
@Author: Pawel Borkar
@route: POST /api/v1/userId/cart
@access: Private
*/
const getCart = asyncHandler(async (req, res, next) => {
  const userId = req.body.userId;

  const user = await User.findById(userId);

  if (!user) {
    return next(new ErrorResponse(RESPONSE.USER_NOT_EXIST, 404));
  }
  const cart = await Cart.find({ userId }).populate('items');

  console.log('cart: ', cart);
  return res.status(200).json({
    success: true,
    count: cart.length,
    cart,
  });
});

/*
@desc: Add product into cart
@Author: Pawel Borkar
@route: POST /api/v1/userId/cart
@access: Private
*/
const addToCart = asyncHandler(async (req, res, next) => {
  const { userId, productId, quantity } = req.body;

  // Check if user exists
  const user = await User.findById(userId);

  if (!user) {
    return next(new ErrorResponse(RESPONSE.USER_NOT_EXIST, 404));
  }
  const cartItem = {
    productId,
    quantity,
  };

  const cart = await Cart.updateOne(
    { user: userId },
    {
      $push: {
        items: cartItem,
      },
    },
    { upsert: true }
  );

  return res.status(201).json({
    success: true,
    cart,
  });
});

export { addToCart, getCart };
