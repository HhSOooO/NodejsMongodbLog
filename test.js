app.get('/log', (req, res) => {
  const user={
    name:req.query.name,
    pwd:req.query.pwd
  }
 //  const name=req.body.name
 //  const pwd=req.body.pwd
  User.findOne({
     username:user.name,
     password:user.pwd
  },function(err,data){
     console.log(data)
     if(data===null){
        res.send(data)
     }
     else{
        res.redirect('/index.html')
     }
  })
})
