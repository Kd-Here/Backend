const express = require('express')
const path = require('path')
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

app.get('/contact', (req, res) => {
  const para = { }
  res.status(200).render('contact.pug')
  })


app.listen(port,()=>{
    console.log(`The app is running smoothly on ${port}`);
})