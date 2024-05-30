const express = require("express");
const multer = require("multer")
const fs = require("fs")

const app = express();
const db = require("./config/database");
const userDB = require("./models/userTBL");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use('/uploads/img', express.static(path.join(__dirname, '/uploads/img')));

let ID

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/img")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage }).single("image")

app.get('/', (rq, rs) => {
    userDB.find({}).then((data) => {
        return rs.render("form", { user: data });
    }).catch((err) => {
        console.log(err);
    })
})
app.get('/deleteData', (rq, rs) => {
    let id = rq.query.id;
    console.log(id)

    userDB.findByIdAndDelete(id).then((singleRecode) => {
        fs.unlinkSync(singleRecode.image)
        return rs.redirect("/");
    }).catch((err) => {
        console.log(err);
    })
})

app.post("/insertUpdateData", upload, (rq, rs) => {
    const { name, email, gender, hobby, mobile, password } = rq.body
    const image = rq.file.path;

    if (ID) {
        if (rq.file) {
            const img = rq.file.path
            userDB.findByIdAndUpdate(ID, { name, email, gender, hobby, mobile, password, img })
                .then((user) => {
                    console.log("Data inserted successfully...", user)
                    return rs.redirect("/");

                }).catch((err) => {
                    console.log(err);
                    return false;
                })
        } else {
            userDB.findByIdAndUpdate(ID, { name, email, gender, hobby, mobile, password })
                .then((user) => {
                    console.log("Data inserted successfully...", user)
                    return rs.redirect("/");

                }).catch((err) => {
                    console.log(err);
                    return false;
                })
        }

    } else {
        userDB.create({ name, email, gender, hobby, mobile, password, image })
            .then((user) => {
                console.log("Data inserted successfully...", user)
                return rs.redirect("/");

            }).catch((err) => {
                console.log(err)
            })
    }
})

app.get('/editData', (rq, rs) => {
    ID = rq.query.id;

    userDB.findByIdAndUpdate(ID).then((data) => {
        return rs.render('edit', { data });
    }).catch((err) => {
        console.log(err);
    })
})

app.listen(3000, (err) => {
    if (!err) {
        console.log("server is start in port :- 3000");
    }
    else {
        console.log("server is not working in port.");
    }
})