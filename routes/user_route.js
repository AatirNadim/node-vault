const express = require('express')

const rootdir = require('../utils/rootpath')
const path = require('path');
const router = express.Router();

const adminData = require('./admin_route');



router.get('/', (req, res, next) => {
    console.log(adminData.products)
    // the data persists relative to the server itself, so it will be visible to other users sending requests to this server, which is why, we do not implement this
    res.send('<h1>in the shop landing page</h1>')
})


module.exports = router;
