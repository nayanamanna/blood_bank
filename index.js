const express=require("express")
const app=express();
const path=require("path");

const port=3000;

app.set('view engine','ejs');
app.set("views",path.join(__dirname,"view"))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json());
app.use(express.urlencoded({extended:true}))






app.listen(port,(error)=>{
    if(error)throw new Error(error)
    else console.log(`${port} app is running`)
})