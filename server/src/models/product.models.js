import { Schema, model } from 'mongoose';
import slugify from 'slugify';

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, 'Please enter the product name.'],
      trim: true,
      maxlength: 127,
    },
    slug: String,
    inStock: {
      type: Boolean,
      require: [true, 'Please add the available of the product.'],
    },
    category: {
      type: String,
      require: [
        true,
        'Please enter the category to which the product belongs.',
      ],
      maxlength: 50,
    },
    price: {
      type: Number,
      require: [true, 'Please enter the price of the product'],
      trim: true,
      maxlength: 6,
    },
    description: {
      type: String,
      require: [true, 'Please add a description of the product.'],
      trim: true,
      maxlength: 500,
    },
    averageRating: {
      type: Number,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating must can not be more than 5'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    // user: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
  { timestamps: true }
);

// Create slug for url
ProductSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});
export default model('Product', ProductSchema);
