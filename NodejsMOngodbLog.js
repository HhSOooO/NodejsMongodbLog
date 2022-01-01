const express = require("express")
const app = express()
const mongoose = require('mongoose');
const ejs = require("ejs")
const bodyparser = require('body-parser')
app.use(bodyparser.json())
// mongoose.connect('mongodb://172.21.2.236:27017/190110910807');
mongoose.connect('mongodb://localhost/test');

app.use('/', express.static('public'))

const user = {
    username: String,
    password: String,
    sex: String,
    birth: Date,
    phone: String
}

const data = mongoose.model('auser', user);

const book = {
    username: String,
    sex: String,
    hair: String,
    date: Date,
    time: String,
    phone: String
}
const bookdata = mongoose.model('buser', book);


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-ww
app.use('/', express.static('public'))

//注册
app.get('/RegAction',  (req, res)=> {
    username = req.query.username;
    password = req.query.password;
    sex = req.query.sex;
    birth = req.query.birth;
    phone = req.query.phone;
    // next();
    console.log(username, password, sex, birth, phone)
    const fuser = new data({ username: username, password: password, sex: sex, birth: birth, phone: phone });
    fuser.save().then(() => console.log('注册成功'));
    res.redirect('login.html')
})

//预约
app.get('/BookAction',  (req, res)=> {
    username = req.query.username;
    sex = req.query.sex;
    hair = req.query.hair;
    date = req.query.date;
    time = req.query.time;
    phone = req.query.phone;
    // next();
    console.log(username, sex, hair, date, time, phone)
    const fbuser = new bookdata({ username: username, sex: sex, hair: hair, date: date, time: time, phone: phone });
    fbuser.save().then(() => console.log('预约成功'));
    res.redirect('index.html')
})


//登录
//用户登陆

app.get('/Sevlet02', (req, res) => { //处理登录请求
    username = req.query.username;
    password = req.query.password;
    if (username == "001") {
        res.redirect('/booklist.html')
    }
    else {
        data.findOne({
            username: req.query.username,
            password: req.query.password
        }, function (err, data) {
            console.log(data)
            if (data === null) {
                res.redirect('/login.html')
            }

            else {//登陆成功
                
                res.redirect('/index.html')
            }
        })
    }

});

//注销
app.get('/Logout', (req, res) =>{//注销,转到登录页面
    res.redirect('/login.html');
});

//
// app.get('/AllBook', function (req, res) {

// });

// app.post('/QueryUser', function (req, res) {
//     quest = req.query.search,
//     res.redirect('/login.html');
// });

app.listen(10807)