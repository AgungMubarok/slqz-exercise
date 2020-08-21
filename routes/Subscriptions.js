const express = require('express')
const router = require('express').Router()

const {
    getAllSubscriptions,
    createSub
} = require('../controllers/Subscriptions')

router.get('/subscriptions', getAllSubscriptions)
router.post('/subscriptions', createSub)

module.exports = router