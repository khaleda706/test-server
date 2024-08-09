const express = require("express");
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res)=>{
    res.send("Testing Server is running..")
})


const user = [
    {
        name : "x",
        roll : 12
    },
    {
        name : "y",
        roll : 13
    },
    {
        name : "z",
        roll : 14
    },
]

app.get("/user", (req, res)=>{
    res.json(user)
})

const testUser = {
    email: "test@gmail.com",
    password : "123"
}

app.post("/login", (req, res)=>{
    const {email, password} = req.body;

    console.log(email, password)

    if(testUser.email !== email){
        return res.send("Incorrect Email")
    }

    if(testUser.password !== password){
        return res.send("Incorrect Password")
    }

    res.send("Login successful")
})



app.listen(3001, ()=>{
    console.log("Server is running on port 3001")
})