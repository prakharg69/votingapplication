const express =require('express');
const app =express();
const user =require('./models/user');
const db = require('./db.connection');

const bodyParser =require('body-parser');
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

const userRoutes=require('./routes/userRoutes');
app.use('/voters',userRoutes);

app.get('/',(req,res)=>{
    res.send("Hello Word");
});


app.listen(PORT,()=>{
    console.log("server bangya");
})
