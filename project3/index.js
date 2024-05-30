const express = require("express")

const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded())

let userData = [
    {
        id: 1,
        name: "pallak",
        email: "pallak@gmail.com",
        mobile: 7573901456,
        password: 1234
    },
    {
        id: 2,
        name: "arzu",
        email: "arzu@gmail.com",
        mobile: 7553901456,
        password: 845
    },
    {
        id: 3,
        name: "pratiksha",
        email: "pratiksha@gmail.com",
        mobile: 755390165,
        password: 8252
    }
]

app.get("/", (req, res) => {
    return res.render("form", {
        user: userData
    })
})

app.post("/insertData", (req, res) => {

    let id = req.body.userId

    if (id) {
        let data = userData.filter((val) => {
            if (val.userId == id) {
                val.userId = req.body.userId;
                val.name = req.body.name;
                val.email = req.body.email;
                val.password = req.body.password;
                val.mobile = req.body.mobile
            }
            return val
        })

        userData = data;
        return res.redirect('/')
    }

    let obj = {
        userId: req.body.userId,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile,
    }

    userData.push(obj);

    return res.redirect("back")
})

app.get('/deleteData', (req, res) => {
    let id = req.query.id
    let data = userData.filter((val) => {
        return val.id != id
    });
    userData = data;
    return res.redirect('back');
});

app.get('/editData', (req, res) => {
    let id = req.query.id;
    let data = userData.filter((val) => {
        return val.id == id;
    });
    userData = data;
    return res.render('form', {
        user: data
    })
})

app.listen(8005, (err) => {
    if (err) {
        console.log("server is not working in port.");
    }
    else {
        console.log("server is start in port :- 8005");
    }
})