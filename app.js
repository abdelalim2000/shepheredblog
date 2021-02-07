// environment configuration
require('dotenv').config()

// express configuration
const express = require('express')
const app = express()

// other libraries configuration
const hbs = require('hbs')
const path = require('path')

// paths
const publicPath = path.join(__dirname, 'public')
const viewsPath = path.join(__dirname, 'resources/views')
const layoutPath = path.join(__dirname, 'resources/layouts')

// express settings config
app.use(express.static(publicPath))
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(layoutPath)

// routes
app.use('/', require('./routes/home'))
app.use('/posts', require('./routes/posts'))

// express localhost:3000
app.listen(process.env.PORT, () => {
    console.log('server running on: http://localhost:3000')
})
