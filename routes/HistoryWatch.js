const express = require('express')
const router = require('express').Router()

const {
    getHistoryWatch,
    createHistory,
    deleteHistory
} = require('../controllers/HistoryWatch')

router.get('/history', getHistoryWatch)
router.post('/history', createHistory)
router.delete('/history/:id', deleteHistory)

module.exports = router