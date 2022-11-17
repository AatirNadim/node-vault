const express = require('express');
const { builtinModules } = require('module');
const path = require('path')

const rootdir = require('../utils/rootpath.js')

const router = express.Router();
const products = [];
console.log(rootdir)
//the value of rootdir, here and later on is different, since in the later one, the value is coming from app.js

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'add-product.html'));
})
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    products.push({title : req.body.title})
    res.redirect('/');
})
// router.post('/product', (req,res, next) => {
//     console.log('\nin the post product\n')
//     console.log('--------' , req.body, '------------') //undefined without the body parser
//     // res.send('this is the products page');
//     //using the parser we get js object, with the key as the name attribute in the input tag
//     res.redirect('/admin/add-product');
//     //get the full path for redirecting
// })
router.get('/product', (req, res, next) => {
    console.log('in the get method for product page');
    res.send('<h1>in the product page</h1>')     
    
});
router.get((req, res, next) => {
    res.send('<h1>this is the 404 page</h1>')
})
exports.products = products;
exports.routes = router;