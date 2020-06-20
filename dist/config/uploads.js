'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  storage: new _multer2.default.diskStorage({
    destination: _path2.default.resolve(__dirname, '..', '..', 'uploads'),
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })
};