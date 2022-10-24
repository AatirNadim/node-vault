const express = require('express')

const router = express.Router();






router.get('/product', (req, res, next) => {
    res.send('<h1>this is the product page</h1>');
})
router.get('/', (req, res, next) => {
    console.log('in the middleware');
    next();
})
//even if i give the path, it is still logging the other middleware blocks, why??
router.get('/', (req, res) => {
    console.log('in the next middleware')
    res.send("<h1>this is a header</h1>")
    // console.log('============test=====================')
})



module.exports = router;
