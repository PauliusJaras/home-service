import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  bgcolor: { type: String, required: true },
  icon: { type: String, required: true },
});

const Category = mongoose.model('Category', categorySchema);
export default Category;
