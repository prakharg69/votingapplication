const express =require('express');
const app =express();

const bodyParser =require('body-parser');
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("server bangya");
})
