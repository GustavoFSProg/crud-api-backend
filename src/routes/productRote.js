import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '../config/uploads'
import productController from '../controllers/productController'

const routes = new Router()

const upload = multer(uploadConfig)

const routeProductList = [
  routes.get('/', productController.getAll),
  routes.get('/:id', productController.getById),
  routes.post('/', upload.single('image'), productController.store),
  routes.put('/update/:id', productController.update),
]

export default routeProductList
