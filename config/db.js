const mysql=require('mysql');

const db=mysql.createPool({
    connectionLimit:10,
    host:"localhost",
    user:"root",
    password:'',
    database:"blood_bank"

})

db.getConnection((error,connection)=>{
    if(error){
        console.log(error);

    }else{
        console.log("sql connection is true")
        connection.release();
        return;
    }
})
module.exports={db}