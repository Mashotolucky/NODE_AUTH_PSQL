const express = require('express');
const app = express();
const {pool} = require("./dbConfig");

const PORT = process.env.PORT || 4000;

app.set("view engine", "ejs"); //middleware in ejs

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) =>{
    res.render('index')
});

app.get('/users/register', (req, res) =>{
    res.render("register")
})

app.get('/users/login', (req, res) =>{
    res.render("login")
})

app.get('/users/dashboard', (req, res) =>{
    res.render("dashboard", {user: "Mash"})
})

app.post('/users/register', (req, res) => {
    let {name, email, password} = req.body;

    console.log({
        name,
        email,
        password,
        password2
    })
})

app.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT}`);
})

