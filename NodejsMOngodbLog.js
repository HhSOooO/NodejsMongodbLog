const express = require("express")
const app=express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test1');
const schema={
    name: String,
    age:Number,
    health:String
}
const mydata = mongoose.model('Cat1',  schema);

const kitty = new mydata({ name: 'testZildjian' });
kitty.save()
// kitty.save().then(() => console.log('testmeow'));
// const kitty1 = new Cat({ name: 'Zhang' ,age:1,health:"good"});
// kitty1.save().then(() => console.log('new schema writed'));
// cats.find({name:"zhang3"},(err,data)=>{console.log(data[0]._doc.name)})

app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    res.send(req.query)
    console.log(req.query)
})
app.listen(10807)