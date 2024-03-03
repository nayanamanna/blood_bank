const express=require("express");
const { dashboard } = require("../controller/user/dashboard.controller");


const User=express.Router()

User.get('/dashboard',dashboard)



module.exports={User}