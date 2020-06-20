import productController from '../controllers/productController'
import { Router } from 'express'

const routes = new Router()

const routeProductList = [routes.get('/', productController.getAll)]

export default routeProductList
