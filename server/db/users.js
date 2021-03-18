let mongosse=require("mongoose");
var usersSchema=mongosse.Schema({
    name:String,
    email:String,
    password:String,
    
})


module.exports=mongosse.model("users",usersSchema);