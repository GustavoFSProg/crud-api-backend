import { Schema, model } from 'mongoose'

const schema = new Schema(
  {
    title: String,
    description: String,

    price: Number,
    image: String,
  },
  {
    timestamps: true,
  }
)

export default model('productModel', schema)
