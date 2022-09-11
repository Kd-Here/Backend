const express = require("express")
const path = require('path')
const app = express();
const port = 80;



// Express setup

app.use('/static',express.static('static'))  //For serving staic files


// PUG releated files
app.set('view engine','pug')  //set template as pug
app.set('views',path.join(__dirname,'views')) //set the view directory



//Endpoints
app.get('/',(req,res)=>{
    // If you wanted to share details in pug
    const con = ' This is our PUG we are uisng it for template rendering'

    // This is dict we are creating to pass are arguments in frontend
    const params ={ 'titile':'PugB is best game','info': con}

    res.status(200).render('index.pug',params)
})

//Start the server
app.listen(port,()=>{
    console.log(`The application is running successfully at port ${port}`);
})