import fs from 'fs'
import sharp from 'sharp'
import path from 'path'
import productModel from '../models/productModel'

async function getAll(req, res) {
  try {
    const data = await productModel.find()

    res.status(200).send(data)
  } catch (error) {
    res.status(400).send(error)
  }
}

async function getById(req, res) {
  try {
    const data = await productModel.findById(req.params.id)

    res.status(200).send(data)
  } catch (error) {
    res.status(200).send(error)
  }
}

async function update(req, res) {
  try {
    await productModel.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
      },
    })

    res.status(200).send({ Menssagem: 'Produto atualizado com sucesso!' })
  } catch (error) {
    res.status(200).send({ Menssagem: ' erro Produto não atualizado!' })
  }
}

async function deleteAll(req, res) {
  try {
    await productModel.deleteMany()
    res.status(200).send({ Mensagem: 'Tudo apagado' })
  } catch (error) {
    res.status(400).send({ Mensagem: 'ERRO ao apagar!' })
  }
}

async function store(req, res) {
  try {
    const { title, price, description } = req.body
    const { filename: image } = req.file

    const [name] = image.split('.')
    const filename = `${name}.jpg`

    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(path.resolve(req.file.destination, 'resized', filename))

    fs.unlinkSync(req.file.path)

    const product = await productModel.create({
      title,
      price,
      description,
      image: filename,
    })

    res.status(201).json({ product })
  } catch (error) {
    res.status(401).send({ Error: 'Erros' })
  }
}
export default { getAll, store, deleteAll, update, getById }
