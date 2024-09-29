import mongoose from 'mongoose';
const { Schema } = mongoose;

const productsSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  images: Array,
  category: String,
  storeName: String,
  location: String
});

const Products = mongoose.model('Products', productsSchema);

export default Products