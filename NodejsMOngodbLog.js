const express =require("express")
const app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://172.21.2.236:27017/190110910807');

const schema={
    name:String,
    age: Number,
    health:String,
    hobby:String
}

const mydata = mongoose.model('cats',schema);
// const kitty = new mydata({ name: 'testZildjian' });
// kitty.save()

app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    res.send(req.query)
    console.log(req.query)
    const kitty = new mydata({ name: req.query.first,health: req.query.secind });
    kitty.save()
    ejs.renderFile("result.html",{returnVal:"sucess"},(err,str)=>{
        res.send(str)
    })
})
app.listen(10807)