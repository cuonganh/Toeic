module.exports = (req, res, next) => {
  console.log("Đã vào middleware", req.user.admin);
  if (!(req.user.admin)) {
    return res.redirect('http://localhost:5000/adminlogin');
  }
  next();
};
