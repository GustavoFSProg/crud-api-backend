import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routeProductList from '../src/routes/productRote'
import mongoose from 'mongoose'
import path from 'path'

dotenv.config()

mongoose.connect(process.env.CONNECTION_STRING)

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

console.log('Api Running at Port: ' + PORT)
