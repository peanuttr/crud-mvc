module.exports = {
    listUser(conn) {
        return new Promise((resolve, reject) => {
            conn.getConnection((err, conn) => {
                if (err) throw err;
                conn.query('select * from users', (err, resp) => {
                    if (err) reject(err)
                    else {
                        console.log(resp);
                        resolve(resp);
                    }
                })
            })
        })

    },
    getUserbyId(conn, id) {
        return new Promise((resolve, reject) => {
            conn.getConnection((err, conn) => {
                if (err) throw err;
                conn.query('select * from users where userId = ?', [id], (err, resp) => {
                    if (err) reject(err)
                    else {
                        console.log(resp);
                        resolve(resp);
                    }
                })
            })
        })
    },
    addUser(conn, iname, iphone) {
        return new Promise((resolve, reject) => {
            conn.getConnection((err, conn) => {
                if (err) throw err;
                conn.query('insert into users(Name,Phone) values(?,?)', [iname, iphone], (err, rows) => {
                    if (!err) resolve(rows);
                })
            })
        })
    },
    editUser(conn, iname, iphone, id) {
        return new Promise((resolve, reject) => {
            conn.getConnection((err, conn) => {
                if (err) throw err;
                conn.query('update users set Name=?,Phone=? where userId=?', [iname, iphone, id], (err, rows) => {
                    if (!err) resolve(rows);
                })
            })
        })
    },
    deletUserbyId(conn, id) {
        return new Promise((resolve, reject) => {
            conn.getConnection((err, conn) => {
                if (err) throw err;
                conn.query('delete from users where userId=?', [id], (err, resp) => {
                    if (err) reject(err)
                    else {
                        console.log(resp);
                        resolve(resp);
                    }
                })
            })
        })
    },

}
