const express=require("express");
const { dashboard, bank_list } = require("../controller/user/dashboard.controller");


const User=express.Router()

User.get('/dashboard',dashboard)
User.get('/bank_list',bank_list)



module.exports={User}