const express = require('express')
const router = express.Router()

const controller = require('../controllers/workspaceController')

router.get('/', (req, res) => res.send('Hello workspace'))
router.get('/getworkspaces', controller.getWorkspace)

module.exports = router