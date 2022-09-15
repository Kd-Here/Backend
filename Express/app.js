console.log("Express is just handling our routing for webserver");

const express = require("express");
const { request } = require("http");
const path = require('path')
const app = express();
const port = 80;


// Sevring static files

app.use('/static',express.static('static'))

app.use(express.urlencoded())
// Brings form data towards to express

// Use template engine -- If you have data (say from a database) that needs to be rendered to HTML, you can use a template engine to take the data and a template and render it to HTML (which subsequently gets served to the client). If your frontend app does the same, using XHR calls or something similar to retrieve the data from the server, it's generally not useful to render to HTML server side (instead, the data gets sent as JSON to the client).
https://stackoverflow.com/questions/39304549/why-would-i-need-template-engines-like-jade-or-ejs-on-the-backend



// Setting template engine as pug for node js
app.set('view engine', 'pug')



// Set the view as directory here it's views in flask/jango it's templates
app.set('views', path.join(__dirname,'views'))


// Out pug demo 
app.get('/',(req,res)=>{
    const con = 'This is best content'
    const msa = {'title':'We are using get method',"info":con}
    // msa  is parameter we passing in pug
    res.status(200).render('index.pug',msa);
})  

// For post request
app.post('/',(req,res)=>{
    console.log(req.body);
    const msa ={"msg":"Your information is stored"}
    // msa  is parameter we passing in pug
    res.status(200).render('index.pug',msa);
})


app.listen(port,()=>{
    console.log(`The application started at ${port}`);
});