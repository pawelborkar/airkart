import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
  name: {
    type: String,
    require: [true, 'Please enter the product name.'],
    trim: true,
    maxlength: 255,
  },
  category: {
    type: String,
    require: [true, 'Please enter the category to which the product belongs.'],
    maxlength: 50,
  },
  price: {
    type: Number,
    require: [true, 'Please enter the price of the product'],
    trim: true,
  },
  description: {
    type: String,
    require: [true, 'Please add a description of the product.'],
    trim: true,
  },
  rating: {
    type: Number,
  },
});

export default model('Product', ProductSchema);
