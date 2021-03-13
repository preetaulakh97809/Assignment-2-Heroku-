let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let Contact = require('../models/contact');

let contactController = require('../controllers/contact');

function verifyToken(req, res, next) {
    let payload = localStorage.getItem('token');
    if (payload==null ||payload === "undefined") {
        res.redirect('/login');
    }
    next();
  }

/* GET Route for the Contact List page - READ Operation */
router.get('/', verifyToken,contactController.displayContactList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add',verifyToken, contactController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add',verifyToken ,contactController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', verifyToken,contactController.displayEditPage);

/* 
* add your code to 
* POST Route for processing the Edit page - UPDATE Operation 
*/
router.post('/edit', verifyToken,contactController.processEditPage);

/* add your code to 
*  GET to perform  Deletion - DELETE Operation 
*/
router.get('/delete/:id',verifyToken, contactController.processDeletePage);

module.exports = router;