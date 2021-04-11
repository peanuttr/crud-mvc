const userModel = require('../models/user');

const userIndex = (req, res) => {
    const connect = req.conn;
    userModel.list(connect).then(rows => {
        res.send({ ok: true, data: rows })
    }, err => {
        res.send({ ok: false, data: err })
    })
};

module.exports = {
    userIndex
};