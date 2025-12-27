const express = require('express');
const app = express();
const {adminAuth, userAuth} = require('./middlewares/auth.js')
app.use(express.json());


app.use('/admin',adminAuth)

app.get('/admin/getData',(req,res,next)=>{
    res.send("All data send")
});

app.post('/admin/update',(req,res,next)=>{
    // Logic of fetching all data
    res.send("Updated...");
});
app.post('/admin/delete',(req,res,next)=>{
    // Logic of fetching all data
    res.send("Deleated...");
});
app.post('/user',userAuth,(req,res,next)=>{
    // Logic of fetching all data
    res.send("Deleated...");
});

app.use('/',(err,req,res,next)=>{
    if(err){
        res.status(500).send("something went wrong..")
    }
});


app.listen(7777,()=>{
    console.log('server is listning...')
})