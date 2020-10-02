module.exports = {
    getAllProducts: (req, res) => {
        const db = req.app.get('db')

db.get_all_products().then((products) => {
    res.status(200).send(products)
  })
}, 

getProductById: (req, res) => {
    const { id } = req.params
    const db = req.app.get('db')

    db.get_product_by_id([id]).then((product) => {
      res.status(200).send(product)
    })
  },

  addProduct: (req, res) => {
      const db= req.app.get('db')
      const {name, price, imgurl} = req.body
      db.add_product([name, price, imgurl]).then((product) => {
          res.status(200).send(product)
      })
  }



}