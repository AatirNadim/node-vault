const express = require('express')

const router = express.Router();

router.use('/add-product', (req, res, next) => {
    console.log('add product page\n');
    res.send('<h1>this is the add-product page</h1><form action = "/product" method = "POST"><input type = "text" name = "aatir"><button type = "submit">click me</button></form>')
    // res.send('')
})
router.post('/product', (req,res, next) => {
    console.log('--------' , req.body, '------------') //undefined without the body parser
    // res.send('this is the products page');
    //using the parser we get js object, with the key as the name attribute in the input tag
    res.redirect('/');
})

router.get((req, res, next) => {
    res.send('<h1>this is the 404 page</h1>')
})
module.exports = router;