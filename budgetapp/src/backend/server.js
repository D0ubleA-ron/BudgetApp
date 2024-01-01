const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const hash = require("bcrypt");
const {response} = require("express");

const salt = 10
const app = express();

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ["POST", "GET"],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret:'secret',
    resave: false,
    saveUninitialized: false,
    cookie:{
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});
const verifyUser = (req, res, next) => {
    const token = req.cookies.token
    if(!token){
        return res.json({Error: "Please Login"})
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if(err) {
                console.log(err)
                return res.json({Error: "Token Error"})
            } else {
                req.username = decoded.username;
                next()
            }
        })
    }
}

app.get('/',verifyUser,  (req, res) => {
    return res.json({Status: "Success", username: req.username})
});

app.get('/logout', (req,res) => {
    res.clearCookie('token')
    return res.json({Status: "Success"})
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (username, email, password) VALUES (?, ?, ?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) =>{
        if(err) return res.json({Error: "Error hashing password"})
        const values = [
            req.body.username,
            req.body.email,
            hash
        ]
        db.query(sql, values, (err, result) => {
            if(err){
                console.log(err)
                return res.json({Error: "Data Insertion Error"})
            }
            return res.json({Status: "Success"})
        })
    })
});

app.post('/login', (req, res) => {

    const sql = "SELECT * FROM login WHERE `email` = ?";
    db.query(sql, [req.body.email], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error during login" });
        }

        if (data.length > 0) {

            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if (err) {
                    return res.json({Error: "Password Compare Error"});
                }
                if(response) {
                    const username = data[0].username
                    const token = jwt.sign({username}, "jwt-secret-key", {expiresIn: '1d'})
                    res.cookie('token', token)
                    return res.json({Status: "Success"})
                } else {
                    return res.json({Error: "Password does not match"})
                }
            });
        } else {
            return res.json({Error: "No Email Exists"});
        }
    });
});

app.listen(8081, () => {
    console.log("listening");
});
