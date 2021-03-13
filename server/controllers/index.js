let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let LocalStorage = require('node-localstorage').LocalStorage;

localStorage = new LocalStorage('./scratch');
let Login = require('../models/login');

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('aboutme', { title: 'About'});
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('projects', { title: 'Products'});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', { title: 'Services'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact'});
}

module.exports.displayLoginPage = (req, res, next) => {
    res.render('login', { title: 'login'});
}

module.exports.processLoginPage = (req, res, next) => {
    let login = Login({
        "userName": req.body.userName,
        "password": req.body.password
    });

    Login.findOne(login, (err, Login) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            //console.log(Login);
            if(!(localStorage === "undefined" || localStorage === null))
            {
                localStorage.removeItem('token');
            }
            localStorage.setItem('token',login.userName);
            res.redirect('/contact-list');
        }
    });
}