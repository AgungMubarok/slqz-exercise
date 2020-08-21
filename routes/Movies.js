const express = require('express')
const router = require('express').Router()

const {
    getAllMovies,
    addMovie,
    updateMovie,
    deleteMovie
} = require('../controllers/Movies')

router.get('/movies', getAllMovies)
router.post('/movie', addMovie)
router.put('/movie/:id', updateMovie)
router.delete('/movie/:id', deleteMovie)


module.exports = router