const userAuth = (rq, rs, nxt) => {
    const { name, email, mobile, password } = rq.body;
    if (name, email, mobile, password) {
        nxt();
    } else {
        rs.send("Invalid Data")
    }
}

module.exports = userAuth