const express = require('express')
const router = require('express').Router()

const {
    getAll,
    createUser,
    updateProfile,
    deleteProfile
} = require('../controllers/User')

router.get('/users', getAll)
router.post('/users',createUser )
router.put('/users/:id', updateProfile)
router.delete('/users/:id', deleteProfile)

module.exports = router