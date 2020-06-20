import { Schema, model } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
})

export default model('productModel', schema)
