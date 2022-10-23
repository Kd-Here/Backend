const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')  //It is responsible for parsing the incoming It is responsible for parsing the incoming



// This is for setting up node js with mongoose
const mongoose = require('mongoose');
main().catch(err => console.log(err));




async function main() {
  await mongoose.connect('mongodb://localhost/contactforTravelPlans',{useNewUrlParser:true});
  
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
const Travelchats = mongoose.model('Travelchats', TravelPlans);




const app = express()
const port = 9899;

app.use('/static', express.static('static'))
app.use(express.urlencoded())
app.set('view engine', 'pug') // register the template engine
app.set('views',path.join(__dirname, 'views')) //Set the views directory to access from anywhere


// / Body-parser middleware
// app.use(bodyparser.urlencoded({extended:false}))
// app.use(bodyparser.json())

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
  




// For post mssg https://www.jenniferbland.com/saving-data-to-mongodb-database-from-node-js-application-tutorial/#:~:text=Saving%20data%20to%20database&text=To%20save%20the%20data%20into,a%20save%20to%20the%20database.
  
app.post("/contact", (req, res)=>{
    var myData = new Travelchats(req.body);
    myData.save().then(()=>{
      res.send("THis item has been saved to the database")
    }).catch(()=>{
      res.status(400).send("Item was not saved to database")
    })
        res.status(200).render('Result.pug')
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