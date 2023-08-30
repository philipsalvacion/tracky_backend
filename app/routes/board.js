const express = require('express')
const router = express.Router()

const controller = require('../controllers/boardController')

router.get('/', (req, res) => res.send('Hello board'))
router.post('/createBoardRequest', controller.createBoardRequest)
router.post('/getBoardRequests', controller.getBoardRequests)
router.post("/getBoardRequests", controller.getBoardRequests)
router.post("/updateBoardRequestStatus", controller.updateBoardRequestStatus)

module.exports = router
