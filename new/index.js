const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    fs.readdir("./files", (err, files) => {
        res.render("index", { files: files })
    })
})

app.get("/file/:filename", (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, fileData) => {
        console.log(fileData);
        res.render("show", { filename: req.params.filename, fileData })
    })

})

app.get("/edit/:filename", (req, res) => {
    res.render("edit", { filename: req.params.filename })
})

app.post("/edit", (req, res) => {
    fs.rename(`./files/${req.body.old_name}`, `./files/${req.body.new_name}.txt`, (err) => {
        res.redirect("/")
    })
})

app.post("/create", (req, res) => {
    fs.writeFile(`./files/${req.body.topic.split(" ").join("")}.txt`, req.body.disc, (err) => {
        console.log(req.body.disc)
        res.redirect("/")
    })
})

app.listen(8558, (err) => {
    err ? console.log("something went wrong!") : console.log("Backend is working")
})