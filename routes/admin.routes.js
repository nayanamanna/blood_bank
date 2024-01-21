const express=require("express");
const { bank_info } = require("../controller/bank.controller");
const { auth_check } = require("../middleware/auth.middleware");

const Admin=express.Router()

Admin.get('/',auth_check,bank_info)



module.exports={Admin}