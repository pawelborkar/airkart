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

    brand: {
      type: String,
      require: [true, 'Please enter the brand to which the product belongs.'],
    },
    description: {
      type: String,
      require: [true, 'Please add a description of the product.'],
      trim: true,
      maxlength: 500,
    },
    category: {
      type: String,
      lowercase: true,
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
    stock: {
      type: Number,
      require: [true, 'Please add the available of the product.'],
    },
    tags: {
      type: [{ type: String }],
      require: [
        true,
        'Please enter the tags for easier discoverability of the product during search.',
      ],
    },
    slug: String,
    imageURLs: {
      type: [{ type: String }],
      require: [true, 'Please upload an image of the product.'],
    },
    averageRating: {
      type: Number,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating must can not be more than 5'],
    },
    countryOfOrigin: {
      type: String,
      require: [
        true,
        'Please enter the country name from which the product has been imported or manufactured.',
      ],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
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
