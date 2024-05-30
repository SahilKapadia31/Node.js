const user = require('../models/user.schema');
const home = async (rq, rs) => {
    let data = await user.find();
    rs.send(data)
}

const create = async (rq, rs) => {
    console.log(rq.body);
    // const { name, email, mobile, password } = rq.body;
    try {
        let data = await user.create(rq.body)
        rs.send(data)
    } catch (error) {
        console.log(error);
    }
}

const update = async (rq, rs) => {
    let { id } = rq.params;

    try {
        let data = await user.findByIdAndUpdate(id, rq.body);
        rs.send(data);
    } catch (error) {
        console.log(error);
    }
}

const deleteData = async (rq, rs) => {
    let { id } = rq.params;

    try {
        let data = await user.findByIdAndDelete(id);
        rs.send(data);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { home, create, update, deleteData }