const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

// handling CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", 
               "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", 
               "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('../app/app.component.html'))

app.use(morgan('short'))

app.get('/user/:id', (req, res) => {
    console.log("Fetching user with id: "+ req.params.id)

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database:'shop'
    })

    const userId = req.params.id
    const queryString = "SELECT * FROM user WHERE is = ?"
    connection.query(queryString, [userId], (err, rows, fields) => {
        if (err) {
            console.log("Failed to query for users: " + err)
            res.sendStatus(500)
            return
        }
    })

    //res.end()
})

app.get("/", (req, res) => {
    console.log("Respongding to root route")
    res.send("Hi from root")
})

//app.get("/users", (req, res) => {
//    res.send("Nodemon auto updates when you save this file")
//})

app.get("/users", (req, res) => {
    var user1 = {name: "Caitlyn", email: "cat@gmail.com", password: "222222"}
    const user2 = {name: "Brand", email: "brand@gmail.com", password: "333333"}
    res.json([user1, user2])
})

//localhost:3001
app.listen(3001, () => {
    console.log("Server is up")
})