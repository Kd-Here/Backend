console.log("Express is just handling our routing for webserver");

const express = require("express")
const path = require('path')
const app = express();
const port = 80;


// Sevring static files

app.use('/static',express.static('static'))



// Use template engine -- If you have data (say from a database) that needs to be rendered to HTML, you can use a template engine to take the data and a template and render it to HTML (which subsequently gets served to the client). If your frontend app does the same, using XHR calls or something similar to retrieve the data from the server, it's generally not useful to render to HTML server side (instead, the data gets sent as JSON to the client).
https://stackoverflow.com/questions/39304549/why-would-i-need-template-engines-like-jade-or-ejs-on-the-backend



// Setting template engine as pug for node js
app.set('view engine', 'pug')



// Set the view as directory here it's views in flask/jango it's templates
app.set('views', path.join(__dirname,'views'))


// Out pug demo 
app.get('/d',(req,res)=>{
    res.render('demo',{title:'Using Pug',msg: 'Welcoming you in supernova galaxye!' })
})

app.get("/",(req,res)=>{
    res.send("This is my first app running on express")
});

app.get("/about",(req,res)=>{
    res.send("This is my about running page on express")
});

app.get("/ab",(req,res)=>{
    res.send("THis is post request here")
});

app.listen(port,()=>{
    console.log(`The application started at ${port}`);
});