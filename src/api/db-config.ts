import { dbConstants } from "./constants/db-contants";

var mysql = require('mysql');  
export const con = mysql.createConnection({  
  host: dbConstants.host,  
  user: dbConstants.user,  
  password: dbConstants.password 
});  
con.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  
});  