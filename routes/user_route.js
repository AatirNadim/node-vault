const express = require('express')

const rootdir = require('../utils/rootpath')
const path = require('path');
const router = express.Router();






router.get('/product', (req, res, next) => {
    console.log('---------', rootdir)
    // 
    res.sendFile(path.join(rootdir, 'views', 'products.html'))
    // res.send('<h1>this is the user product page</h1>')
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
