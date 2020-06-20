'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _productRote = require('../routes/productRote');

var _productRote2 = _interopRequireDefault(_productRote);

var _productModel = require('../models/productModel');

var _productModel2 = _interopRequireDefault(_productModel);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _sharp = require('sharp');

var _sharp2 = _interopRequireDefault(_sharp);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getAll(req, res) {
  try {
    const data = await _productModel2.default.find();

    res.status(200).send(data);
  } catch (error) {
    res.status(200).send(error);
  }
}

async function getById(req, res) {
  try {
    const data = await _productModel2.default.findById(req.params.id);

    res.status(200).send(data);
  } catch (error) {
    res.status(200).send(error);
  }
}

async function update(req, res) {
  try {
    await _productModel2.default.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description
      }
    });

    res.status(200).send({ Menssagem: 'Produto atualizado com sucesso!' });
  } catch (error) {
    res.status(200).send({ Menssagem: ' erro Produto não atualizado!' });
  }
}

async function deleteAll(req, res) {
  try {
    const data = await _productModel2.default.deleteMany();
    res.status(200).send({ Mensagem: 'Tudo apagado' });
  } catch (error) {
    res.status(400).send({ Mensagem: 'ERRO ao apagar!' });
  }
}

async function store(req, res) {
  try {
    const { title, price, description } = req.body;
    const { filename: image } = req.file;

    console.log(req.file);

    const [name] = image.split('.');
    const filename = `${name}.jpg`;

    await (0, _sharp2.default)(req.file.path).resize(500).jpeg({ quality: 70 }).toFile(_path2.default.resolve(req.file.destination, 'resized', filename));

    _fs2.default.unlinkSync(req.file.path);

    const product = await _productModel2.default.create({
      title,
      price,
      description,
      image: filename
    });

    res.status(201).json({ product });
  } catch (error) {
    res.status(401).send({ Error: 'Erros' });
  }
}
exports.default = { getAll, store, deleteAll, update, getById };