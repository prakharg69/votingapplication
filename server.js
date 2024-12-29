const express =require('express');
const app =express();
const db = require('./db.connection');

const bodyParser =require('body-parser');
app.use(bodyParser.json()); // req.body

const passport = require('./Auth');

app.use(passport.initialize());

const localMiddleware = passport.authenticate('local',{session:false});

app.get('/',localMiddleware,(req,res)=>{    
    res.send('welcome to our hotel hihihiihihihi');
});


const userRoutes=require('./routes/userRoutes');
app.use('/voters',userRoutes);



app.listen(3000,()=>{
    console.log("server bangya");
})
