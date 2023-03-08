const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
function getProducts() {
	return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}


const controller = {
  index: (req, res) => {
    res.render('index');
  },

  login: (req, res) => {
    res.render('login');
  },

  productCart: (req, res) => {
    res.render('productCart');
  },
  
  detailProduc: (req, res) =>{
    const { id } = req.params;
   const products = getProducts();
    const product = products.find((element) => element.id === +id);
    res.render('detail', { product });
  },

  register:(req,res) => {
    res.render('register')
  }
};

module.exports = controller;
