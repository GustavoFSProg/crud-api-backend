import express from 'express'
import cors from 'cors'
import routeProductList from '../src/routes/productRote'


const app = express()
app.use(express.json())
app.use(cors())
app.use('/', routeProductList)

const PORT = 3000

app.listen(PORT)

console.log('Api Running at Port: ' + PORT)
