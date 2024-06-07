const express = require("express");

const app = express();
const db = require("./config/database");
const userDB = require("./models/userTBL");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
let bookId;

app.get('/', (rq, rs) => {
    userDB.find().then((data) => {
        return rs.render("form", { Bookstore: data });
    }).catch((err) => {
        console.log(err);
    })
})
app.get('/deleteData', (rq, rs) => {
    let id = rq.query.id;
    console.log(id)

    userDB.findByIdAndDelete(id).then(() => {
        return rs.redirect("/");
    }).catch((err) => {
        console.log(err);
    })
})

app.post("/insertUpdateData", (rq, rs) => {

    const { book_title, book_img, book_price, book_discription } = rq.body
    if (bookId) {
        userDB.findByIdAndUpdate(bookId, { book_title, book_img, book_price, book_discription }).then((data) => {
            return rs.redirect('/');
        }).catch((err) => {
            console.log(err)
            return false;
        })

    } else {
        userDB.create({ book_title, book_img, book_price, book_discription })
            .then((user) => {
                console.log("Data inserted successfully...", user)
                return rs.redirect("/");
            }).catch((err) => {
                console.log(err)
            })
    }
})

app.get('/editData', (req, res) => {
    bookId = req.query.id;
    userDB.findById(bookId).then((data) => {
        return res.render('edit', { data });
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.listen(8000, (err) => {
    if (!err) {
        console.log("server is start in port :- 8000");
    }
    else {
        console.log("server is not working in port.");
    }
})