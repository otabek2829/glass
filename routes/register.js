const express = require('express')
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator')
const userDb = require('../model/User');
const passport = require('passport');
const router = express.Router()


router.get('/', (req, res) => {
    res.render('register', {
        title: "Регистратция",
    })
})

router.post("/", [
    check("names", "Введите пожалуйста ваш имя").notEmpty(),
    check("surname", "Введите пожалуйста ваш имя").notEmpty(),
    check("login", "Введите пожалуйста ваш логин").notEmpty(),
    check("password", "Введите пожалуйста ваш пароль").notEmpty(),
],
    async (req, res) => {
        if (req.body.password) {
            await check("password2", "Введите пожалуйста пароль ещё раз")
                .equals(req.body.password)
                .notEmpty()
                .run(req)
        }
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.render('register', {
                title: "Ошибка при регистратции",
                errors: errors.array()
            })
        } else {
            try {
                const db = await new userDb({
                    names: req.body.names,
                    password: req.body.password,
                    phone: req.body.phone,
                    login: req.body.login,
                    surname: req.body.surname,
                })
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(db.password, salt, function (err, hash) {
                        if (err) {
                            console.log(err);
                        } else {
                            db.password = hash
                            db.save((err) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    req.flash('success', "Вы успешно прошли регистратцию")
                                    res.redirect('/')
                                }
                            })
                        }
                    });
                });
            } catch (error) {
                console.log(error);
            }
        }
    })

    router.get('/login' , async (req , res) => {
        res.render("login" , {
            title: "Авторизация"
        })
    })

    router.post('/login' , async (req , res , next) => {
        passport.authenticate('local' , {
            successRedirect: '/',
            failureRedirect: '/register/login',
            failureFlash : "Ошибка в логине или пароле. Проверьте правильность заполнения полей.",
            successFlash: "Вы успешно авторизововались" 
        })(req , res , next)
    })
    
module.exports = router