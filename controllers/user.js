const userModel = require('../models/user');

const userIndex = (req, res) => {
    const connect = req.conn;
    userModel.listUser(connect).then(rows => {
        res.send({ ok: true, data: rows })
    }, err => {
        res.send({ ok: false, data: err })
    })
};

const userById = (req, res) => {
    const connect = req.conn;
    const id = req.params.id;
    userModel.getUserbyId(connect, id).then(rows => {
        res.send({ ok: true, data: rows })
    }, err => {
        res.send({ ok: false, data: err })
    })
};

const userAdd = (req, res) => {
    const connect = req.conn;
    const iname = req.body.name;
    const iphone = req.body.phone;
    userModel.addUser(connect, iname, iphone).then(rows => {
        res.send({ ok: true, data: "insert 1 record successful" })
    }, err => {
        res.send({ ok: false, data: err })
    })
};

const userEdit = (req, res) => {
    const connect = req.conn;
    const iname = req.body.name;
    const iphone = req.body.phone;
    const id = req.params.id;
    userModel.editUser(connect, iname, iphone, id).then(rows => {
        res.send({ ok: true, data: "update 1 record successful" })
    }, err => {
        res.send({ ok: false, data: err })
    })
};

const userDel = (req, res) => {
    const connect = req.conn;
    const id = req.params.id;
    userModel.deletUserbyId(connect, id).then(rows => {
        res.send({ ok: true, data: "delete 1 record successful" })
    }, err => {
        res.send({ ok: false, data: err })
    })
};

module.exports = {
    userIndex,
    userById,
    userAdd,
    userEdit,
    userDel
};