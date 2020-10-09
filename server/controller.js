module.exports = {
    getAllProducts: (req, res) => {
        const db = req.app.get('db');

db.get_all_products().then((dbRes) => {
    res.status(200).send(dbRes)
  })
  .catch(err => console.log.log(err))
}, 

// getProductById: (req, res) => {
//     const { id } = req.params
//     const db = req.app.get('db')

//     db.get_product_by_id({id})
//     .then((product) => {
//       res.status(200).send(product)
//     })
//     .catch(err => console.log(err));
//   },

  addProduct: (req, res) => {
      const db= req.app.get('db')
      const {name, price, imgurl} = req.body
      db.add_product({name, price, imgurl})
      .then((dbRes) => {
          res.status(200).send(dbRes)
      })
      .catch(err=> console.log(err));
  }


}