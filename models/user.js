module.exports = {
    list(conn) {
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

    }
}
