module.exports = (req, res, next) => {
  console.log("Đã vào middleware", req.user);
  if (!req.user) {
    console.log("user ", req.user);
    return res.redirect('http://localhost:5000/login');
  }
  next();
};
