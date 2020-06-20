import productController from '../controllers/productController'
import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '../config/uploads'

const routes = new Router()

const upload = multer(uploadConfig)

const routeProductList = [
  routes.get('/', productController.getAll),
  routes.get('/:id', productController.getById),
  routes.post('/', upload.single('image'), productController.store),
  // routes.delete('/del', productController.deleteAll),
  routes.put('/update/:id', productController.update),
]

export default routeProductList
