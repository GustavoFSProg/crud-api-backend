import routeProductList from '../routes/productRote'

function getAll(req, res) {
  res.status(200).send({ mensagem: 'Entrou no controller' })
}

export default { getAll }
