const express = require('express')
const bodyParser = require('body-parser')
const Doctors = require('../models/Doctors')

const doctorsRouter = express.Router();

doctorsRouter.use(bodyParser.json());

doctorsRouter.route('/')
    .all((req, res, next) => {
        console.log("res is", req)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        Doctors.find()
            .then((Doctors) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Doctors);
            }, (err) => next(err))
            .catch((err) => next(err))

    })
    .post((req, res, next) => {
        Doctors.findOne({ password: req.body.password, telnum: req.body.telnum })
            .then((Doctors) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.json(Doctors);
            }, (err) => next(err))
            .catch((err) => next(err))
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end("/put is not supported on /doctor")
    })
    .delete((req, res, next) => {
        Doctors.remove({_id:"608a7d8331046c5844fed272"})
            .then((Doctors) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Doctors);
            }, (err) => next(err))
            .catch((err) => next(err))
    });


doctorsRouter.route('/signup/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .post((req, res, next) => {
        Doctors.findOne({ telnum: req.body.telnum })
            .then((Doctor) => {
                if (Doctor === null) {
                    Doctors.create(req.body)
                        .then((newDoctor) => {
                            console.log('Doctor Created ', newDoctor);
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(newDoctor);
                        }, (err) => next(err))
                        .catch((err) => next(err));
                }
                else {
                    var Err = new Error('Doctor with mobile number ' + req.body.telnum + ' already exists!!! Kindly Login ')
                    next(Err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = doctorsRouter;