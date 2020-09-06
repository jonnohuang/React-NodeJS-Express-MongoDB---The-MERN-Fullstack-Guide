const mongoose = require('mongoose');

const Product = require('./models/product');
const url = 'mongodb+srv://jonno:mdb0905@cluster0.dc4gb.mongodb.net/products_test?retryWrites=true&w=majority';

mongoose.connect(url).then( () => {
    console.log('Connected to database');
}).catch(() => {
    console.log('Connection failed!')
});

const createProduct = async (req, res, next) => {
    const createProduct = new Product({
        name: req.body.name,
        price: req.body.price
    });
    
    const result = await createProduct.save();
    console.log(typeof createProduct._id);
    res.json(result);
};

const getProducts = async (req, res, next) => {
    const products = await Product.find().exec();
    res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;