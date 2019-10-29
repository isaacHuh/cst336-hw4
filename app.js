const express = require("express");
const faker = require("faker");
const app = express();

app.engine('html',require('ejs').renderFile);
app.use(express.static("public"));

console.log(faker.name.findName());
console.log(faker.image.avatar());

//routes
app.get("/", function(req,res){
   res.render("index.html"); 
});

app.get("/iloveyou", function(req,res){
   res.render("iloveyou.ejs"); 
});

app.get("/sasser", function(req,res){
   res.render("sasser.ejs"); 
});

app.get("/wannacry", function(req,res){
   res.render("wannacry.ejs"); 
});

app.get("/faker", function(req,res){
   res.render("faker.ejs", {
      virusName: faker.internet.userName(),
      randImage: faker.image.cats(),
      randText: faker.lorem.paragraphs(),
      randNum: faker.random.number(),
      randUrl: faker.image.sports()
   }); 
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
console.log("Express server is running...");
});