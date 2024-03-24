const express=require("express");
const { check_bank } = require("../middleware/auth.middleware");
const { dashboard } = require("../controller/user/dashboard.controller");
const { bank_list, blood_stock } = require("../controller/bank/bank_dashboard.coontroller");

const Bank=express.Router()

Bank.get('/dashboard',check_bank,dashboard)
Bank.get('/bank_list',check_bank,bank_list)
Bank.get('/blood_stock',check_bank,blood_stock)

module.exports={Bank}