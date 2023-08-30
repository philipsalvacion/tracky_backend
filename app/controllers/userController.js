const getUsername = async (req, res) => {
    res.json({message : 'Philip Salvacion'})
}

module.exports = {
    get : (req, res) => {
        res.json({message : 'Hello User'})
    },
    getUsername,
}