import { model, Schema } from 'mongoose';
import { Product } from '../models/product.models.js';

const cartItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    require: [true, 'Product required.'],
  },
  quantity: {
    type: Number,
    default: 1,
    required: [true, 'Please add atleast one unit'],
  },
});

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    items: [cartItemSchema],
    total: {
      type: Number,
      default: 0,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
  { timestamps: true }
);

export default model('Cart', cartSchema);
