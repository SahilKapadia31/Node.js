const express = require("express");

const app = express()

app.set("view engine", "ejs");

app.use(express.urlencoded())

let todos = []

app.get("/", (req, res) => {
    return res.render("form", {
        task: todos
    })
})

app.post("/insertData", (req, res) => {
    const { id, task } = req.body

    if (id) {
        todos.filter((val) => {
            if (val.id == id) {
                val.task = task
            }
            return val
        })

        console.log("Data Updated Successfully..");
        return res.redirect('/');
    }

    let obj = {
        id: Date.now(),
        task: req.body.task,
    }
    todos.push(obj)
    return res.redirect('back')
})

app.get('/editData', (req, res) => {
    let id = req.query.taskId
    let todo = todos.find((val) => {
        return val.id == id
    })
    return res.render('editForm', { todo: todo })

})

app.get('/deleteData', (req, res) => {
    let id = req.query.taskId
    let todo = todos.filter((val) => {
        return val.id != id
    });
    todos = todo;
    return res.redirect('back');
});

app.listen(8005, (err) => {
    if (err) {
        console.log("server is not working in port.");
    }
    else {
        console.log("server http://localhost:" + 8005);
    }
})