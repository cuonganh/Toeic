
//ban dang nhap hay chua

const authorize = (req, res, next) => {
    console.log("da vao mdw", req.user);
    if (!req.user) {
        console.log("user ", req.user);
        return res.redirect('/login');
    }
    next();
};

module.exports = { authorize }