const connection = require('../config/databaseConnection')

//Get user workspaces
const getWorkspace = async (req, res) => {
    const procedure = 'spGetWorkspaces'
    const params = {
        workSpaceOwner: 'philipslv'
    }
    const query = `CALL ${procedure}('${params.workSpaceOwner}')`
    connection.query(query, params, (err, results) => {
        if (err) {
            res.status(500).json({message : err})
        } else {
            res.json({message : results})
        }
    })
}

module.exports = {
    getWorkspace,
}