const pool = require('../config/databaseConnection')

//For getting all board requests
const getBoardRequests = async (req, res, next) => {
    const procedure = 'spGetBoardRequests'
    const params = {
        boardId: req.body.boardId
    }
    const query = `CALL ${procedure}('${params.boardId}')`
    pool.query(query, params, (err, response) => {
        if (err) {
            res.status(500).json({message : err})
        } else {
            res.set('Access-Control-Allow-Origin', '*');
            const message = response[0]
            res.json({message})
        }
    })
    pool.release;
}

//For creating a new board request
const createBoardRequest = async (req, res) => {
    const procedure = 'spCreateRequest'
    const dateObj = new Date(req.body.item_duedate);
    const formattedDate = dateObj.toISOString().slice(0, 19).replace("T", " ");
    
    const params = {
      item_name: req.body.item_name,
      item_owner: req.body.item_owner,
      item_status: req.body.item_status,
      item_project: req.body.item_project,
      item_board: req.body.item_board,
      item_description: req.body.item_description,
      item_duedate: formattedDate,
      item_label: req.body.item_label,
    };
    pool.query(
      `CALL ${procedure}('${params.item_name}', '${params.item_owner}', '${params.item_status}', '${params.item_project}', '${params.item_board}', '${params.item_description}', '${params.item_duedate}', '${params.item_label}')`,
      params,
      (err, results) => {
        if (err) {
          res.status(500).json({ message: err });
        } else {
          res.json({ message: "Request created successfully" });
        }
      }
    );
    pool.release;
}

//For updating a board request status
const updateBoardRequestStatus = async (req, res) => {
    const procedure = 'spUpdateRequestStatus'

    const params = {
      item_id: req.body.itemId,
      item_status: req.body.item_status,
    };
    pool.query(`CALL ${procedure}('${params.item_id}', '${params.item_status}')`, params, (err, results) => {
        if (err) {
            res.status(500).json({message : err})
        } else {
            res.json({message : "Request status updated successfully"})
        }
    })
    pool.release;
}

module.exports = {
  getBoardRequests,
  createBoardRequest,
  updateBoardRequestStatus,
};