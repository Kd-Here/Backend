
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/kdCart',{useNewUrlParser : true, useUnifiedTopology:true});

// main().catch(err => console.log(err));

// async function main() {
  
//   // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
// }


// Before establishing connection make sure your mongod is on
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error :'));
db.once('open',function(){
    // We're connected!
    console.log("WE are connected to server bro/sis");
});
