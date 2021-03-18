


let express= require("express");
let bodyParser =  require('body-parser');
require("./db/config");
let Users= require("./db/users")
require('dotenv').config();
const nodemailer=require("nodemailer");



let app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
let verification_code;
//let users = [];

let transporter =nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'crick414@gmail.com',
        pass:'bakwasnakar007'
    }
});



app.get("/",(req,res)=>{
   
    res.send("This work")
})

app.post("/signup", async (req, res) => {
try {
 console.log("backend pa request a gai");
 let number=Math.floor((Math.random() * 10000) + 1);
   verification_code=number.toString();
 let mailoption ={
    from:'crick414@gmail.com',
    to:req.body.email,
    subject:'Testing and testing',
    text:verification_code,
}


 transporter.sendMail(mailoption, function(err,data){
    if(err){
        console.log("error occured")
    }
    else{
        console.log("email sent")
    }

});
//  let users= new Users(req.body); 
//   await users.save();
//   console.log(users.data);



//  res.json(users);
res.end("emil sent");

} catch (e) {
    res.send(500, { error: e.message});
}

   
  

});


app.use(express.static('./build'));
app.listen(8080, function () {
    console.log("Start starting");
})
