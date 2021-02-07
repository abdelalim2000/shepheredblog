const express = require('express')
const router = express.Router();
const axios = require('axios')

router.get('/', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=30')
        .then((data) => {
            res.render('posts', data)
        })
        .catch((err) => res.status(400).send({msg: err.message}))
})

router.get('/show/:id',(req,res)=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
        .then((data) => {
            res.render('show', data)
        })
        .catch((err) => res.status(400).send({msg: err.message}))
})

module.exports = router
