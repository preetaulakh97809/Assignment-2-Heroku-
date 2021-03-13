let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('contact/list', {title: 'Contact', ContactList: contactList});      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact'})          
}

module.exports.processAddPage = (req, res, next) => {
        let newContact = Contact({
            "name": req.body.name,
            "contactNumber": req.body.contactNumber,
            "emailAddress": req.body.emailAddress
        });
    
        Contact.create(newContact, (err, Contact) =>{
            if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                // refresh the contact list
                res.redirect('/contact-list');
            }
        });
}
/*
Add your code here to display EDIT
*/
module.exports.displayEditPage = (req, res, next) => {
    Contact.findById(req.params.id,(err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('contact/edit', {title: 'Contact', ContactList: contactList});      
        }
    });
}

/*
Add your code here to process EDIT
*/
module.exports.processEditPage=(req, res, next)=>{
    let newContact = Contact({
        "_id":req.body.id,
        "name": req.body.name,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress
    });

    Contact.findOneAndUpdate({_id:req.body.id},newContact, (err, Contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contact-list');
        }
    });
}
module.exports.processDeletePage = (req, res, next) => {
    Contact.findByIdAndRemove(req.params.id,(err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.redirect('/contact-list');    
        }
    });
}

/*
Add your code here to perform DELETE operation
*/