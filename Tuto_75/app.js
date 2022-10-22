const express = require('express')
const path = require('path')

// This is for setting up node js with mongoose
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost/contactforTravelPlans');
  
  // use `await mongoose.connect('mongodb://user:password@localhost/test');` if your database has auth enabled
}
//Defining mongoose schema
const TravelPlans = new mongoose.Schema({
  name: String,
  Message:String,
  Location:String,
  Book_Schedule:String,
  PhoneNumber: Number
});
// Creating a model
const Travelchats = mongoose.model('FirstConnections', TravelPlans);




const app = express()
const port = 9899;

app.use('/static', express.static('static'))
app.use(express.urlencoded())
app.set('view engine', 'pug') // register the template engine
app.set('views',path.join(__dirname, 'views')) //Set the views directory to access from anywhere



app.get('/', (req, res) => {
  const para = { }
  res.status(200).render('home.pug')
})






// ----------------------------------------Template Inheritance ahead---------------------------------------------
//To check common layout what child pages will get  
app.get('/Common_layout', (req, res) => {
  const para = { }
  res.status(200).render('layout.pug')
})
  




// For post mssg
  
app.post("/contact", function(req, res) {
    const con = ' This is our PUG we are uisng it for template rendering'
    const params ={'titile':'PugB is best game','info': con}
    res.status(200).render('home.pug',params)
});

app.get('/Travel%20Plans', (req, res) => {
    const para = {}
    res.status(200).render('contact.pug')
})




app.get('/Home', (req, res) => {
    const para = { }
    res.status(200).render('contact.pug')
    })

app.listen(port,()=>{
    console.log(`The app is running smoothly on ${port}`);
})