import { model, Schema } from 'mongoose';

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      lowercase: true,
      require: [true, 'Please enter the category.'],
    },
  },
  { timestamps: true }
);
export const Category = model('Category', CategorySchema);
