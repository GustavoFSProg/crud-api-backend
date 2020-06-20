'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _productRote = require('../src/routes/productRote');

var _productRote2 = _interopRequireDefault(_productRote);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

_mongoose2.default.connect(process.env.CONNECTION_STRING);

const app = (0, _express2.default)();
app.use(_express2.default.json());
app.use((0, _cors2.default)());
app.use('/', _productRote2.default);

app.use('/files', _express2.default.static(_path2.default.resolve(__dirname, '..', 'uploads', 'resized')));

const PORT = 3000;

app.listen(PORT);

console.log('Api Running at Port: ' + PORT);