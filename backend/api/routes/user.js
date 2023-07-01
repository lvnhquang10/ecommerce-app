const express = require('express');
const router = express.Router();

const mysqlConnection = require('../connection/connection');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    mysqlConnection.query("SELECT * FROM user", (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});

router.post('/login', (req, res) => {
    const { userName, password } = req.body;
    mysqlConnection.query('SELECT userName,roleId FROM user WHERE userName=? AND password=?',
        [userName, password],
        (err, rows, fields) => {
            if (!err) {
                if (rows.length > 0) {
                    let data = JSON.stringify(rows[0]);
                    const token = jwt.sign(data, 'stil');
                    res.json({ token });
                } else {
                    res.json('Incorrect username or password');
                }
            } else {
                console.log(err);
            }
        }
    )
})

router.post('/token', verifyToken, (req, res) => {
    res.json('Secret information');
})

function verifyToken(req, res, next) {
    if (!req.headers.authorization) return res.this.status(401).json('Non authoritative');

    const token = req.headers.authorization.substr(0);
    if (token !== '') {
        const content = jwt.verify(token, 'stil');
        req.data = content;
        next();
    }else{
        res.status(401).json('Token is verified');
    }
}

module.exports = router;