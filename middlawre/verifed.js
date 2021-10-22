const md = (req , res , next) => {
    if(req.isAuthenticated()){
        next()
    }else{
        req.flash('danger' , "Пожалуйста с начало авторизуйтесь")
        res.redirect('/register/login')
    }
}

module.exports = md