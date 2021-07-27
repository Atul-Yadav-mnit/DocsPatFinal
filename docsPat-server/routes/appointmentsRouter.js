const express = require('express')
const bodyParser = require('body-parser')
const Appointments = require('../models/Appointments')

const appointmentsRouter = express.Router();

appointmentsRouter.use(bodyParser.json());

appointmentsRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {

        Appointments.find({})
            .populate('patId')
            .populate('docId')
            .then((Appointments) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Appointments);
            }, (err) => next(err))
            .catch((err) => next(err))

    })
    .post((req, res, next) => {
        // Yconsole.log("Here at post ", req.body)
        Appointments.create(req.body)
            .then((newappointment) => {
                console.log("new appointments ", newappointment)
                console.log('appointment Created ', newappointment);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(newappointment);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        Appointments.findOne({ _id: req.body._id })
            .then((appointment) => {
                if (appointment === null) {
                    var err = new Error('No appointment with :' + req.body._id)
                    next(err)
                }
                else {
                    appointment.prescription = req.body.prescription;
                    appointment.status = "Completed"
                    appointment.save()
                        .then((appointment) => {
                            res.json(appointment);
                        }, err => next(err))
                        .catch(err => next(err))

                }
            }, (err) => next(err))
            .catch(err => next(err))
    })
    .delete((req, res, next) => {
        Appointments.remove({})
            .then((Appointments) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Appointments);
            }, (err) => next(err))
            .catch((err) => next(err))
    });


appointmentsRouter.route('/user/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .post((req, res, next) => {
        console.log("Here at post ", req.body)
        Appointments.create(req.body)
            .then((newappointment) => {
                console.log("new appointments ", newappointment)
                console.log('appointment Created ', newappointment);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(newappointment);
            }, (err) => next(err))
            .catch((err) => next(err));
    })


appointmentsRouter.route('/patients/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .post((req, res, next) => {

        Appointments.find({})
            .populate('docId')
            .then((Appointments) => {
                res.setHeader('Content-Type', 'application/json');
                console.log(Appointments)
                //    console.log(Appointments[0].patId == req.body.patId," ",Appointments[0].patId, " ",req.body.patId )
                res.json(Appointments.filter((appointment) => appointment.patId == req.body.patId))
            }, (err) => next(err))
            .catch((err) => next(err))

    })


appointmentsRouter.route('/doctors/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .post((req, res, next) => {

        var date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        Appointments.find({ date: date })
            .populate('patId')
            .then((Appointments) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Appointments.filter((appointment) => appointment.docId == req.body.docId))
            }, (err) => next(err))
            .catch((err) => next(err))

    })

module.exports = appointmentsRouter;