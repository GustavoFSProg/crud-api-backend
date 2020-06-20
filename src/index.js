import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routeProductList from '../src/routes/productRote'
import mongoose from 'mongoose'
import path from 'path'

dotenv.config()

const CONNECTION_STRING =
  'mongodb+srv://gustavo:jogu3340@cluster0-z94zt.mongodb.net/crud-api?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_STRING)

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', routeProductList)

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))
)

const PORT = 3000

app.listen(PORT)

console.log('Api Running at Port: ' + PORT)
