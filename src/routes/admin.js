var express = require('express');
var router = express.Router();

const adminController = require('../controllers/adminController');

/* GET admin. */
router.get('/', function(req, res, next) {
  res.render('admin');
});
router.post('/auth', adminController.auth);


router.get('/forgot', (req,res) => {
  res.render('admin_forgot_auth');
});
router.post('/forgot_auth', adminController.forgot_auth);


router.get('/forgot/change', (req,res) => { //Le puse /:id
  res.render('admin_forgot_change');
});
router.post('/forgot_change', adminController.forgot_change);  // le puse /:id


router.get('/logout',function(req, res, next) {
  req.session.destroy(() => {
    res.redirect('/admin');
  });
});

module.exports = router;