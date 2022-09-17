const express = require("express");
const { fstat } = require("fs");
const path = require('path')
const app = express();
const port = 80;
const fs = require('fs');
// Node.js as a File Server fs




// Express setup

app.use('/static',express.static('static'))  //For serving staic files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// This bcoz our url is encoded for what you type 


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



app.post('/',(req,res)=>{

    // Req from form with their name not with id
    let Dict = {

        "name" : req.body.name,
        "Age" : req.body.age,
        "Gen" : req.body.gender,
        "Adrres" : req.body.address,
        "Aboit" :req.body.more
    };

    ass = JSON.stringify(Dict);
    // JSON.stringify(Dict) if not used it we simply displaying Dict gives object [object] means object is displaying another object
    // We hd displayed data to user schareen we can also that in new file
    let RegisteredMemberDetails = `Name : ${Dict["name"]} \n ${Dict["name"]} age is ${Dict["Age"]} who will workout in ${Dict["Gen"]} section who reside in ${Dict["Adrres"]} focusing to improve ${Dict["Aboit"]}`;
    fs.writeFileSync('GymMemberRegister.txt',RegisteredMemberDetails)
    sending ={'titile':'Access via post','info':ass}
    console.log(Dict);
    res.status(200).render('index.pug',sending)
})

//Start the server
app.listen(port,()=>{
    console.log(`The application is running successfully at port ${port}`);
})