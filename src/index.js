import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import path from 'path'
import routeProductList from './routes/productRote'

dotenv.config()

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', routeProductList)

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))
)

const { PORT } = process.env

app.listen(PORT)

// eslint-disable-next-line no-console
console.log(`Api Running at Port: ${PORT}`)
