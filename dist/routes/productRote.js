'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _productController = require('../controllers/productController');

var _productController2 = _interopRequireDefault(_productController);

var _express = require('express');

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _uploads = require('../config/uploads');

var _uploads2 = _interopRequireDefault(_uploads);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = new _express.Router();

const upload = (0, _multer2.default)(_uploads2.default);

const routeProductList = [routes.get('/', _productController2.default.getAll), routes.get('/:id', _productController2.default.getById), routes.post('/', upload.single('image'), _productController2.default.store),
// routes.delete('/del', productController.deleteAll),
routes.put('/update/:id', _productController2.default.update)];

exports.default = routeProductList;