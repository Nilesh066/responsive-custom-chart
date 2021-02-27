const express= require('express');
const app=express();
const path= require('path');


app.use(express.json());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'));
})


const PORT= process.env.PORT || 8081;
app.listen(PORT,()=>{console.log(`server at ${PORT} is running ...`)});

