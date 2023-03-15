const express = require('express');
const router = express.Router()

// getting all
router.get('/', (res, req) => {
    res.send('Helloo people!')
})

// getting one
router.get('/:id', (res, req) => {
    req.params.id
})

// creating one
router.post('/', (res, req) => {
    
})

// creating one - update just one object. put replaces entire object
router.patch('/', (res, req) => {
    
})