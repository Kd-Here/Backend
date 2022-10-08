// step to connect our node with mongo usign mongoose
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/Cars');
  console.log("We are connected with Nodejs and Mogodb usign Mongoose.");
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

// Here connected to kdCart


// Creating a schema for mongoonse what you will put in mongo

const carSchema = new mongoose.Schema(
    { name : String }
);

// Creating module using schema which locks the schema 


// created a function for schema 
carSchema.methods.speak = function () {
    var gret = "Hey "+this.name + " get ready for ride !"
    console.log(gret);
    
}
// 'Cars' is for collections in Cars db
const Cars = mongoose.model('Cars',carSchema);

// kdcar is object of Cars 
var kdcar = new Cars({name:"Buggati Ceintod"});
console.log(kdcar.name);
kdcar.speak();

// First create schema for mongo what will it have
// provide all methods 
// make schema to module then create n numbers of object
// kdcar is object of Cars 




// ####################
// saving it Remember we are in js environment not python so using {}
// ####################

kdcar.save(function (err,kdcar){
    if (err) return console.log(err);
    kdcar.speak(); //THis is to check whether our code is exceuted or not
});


var kdcar = new Cars({name:"Rolls Royce"});

kdcar.save(function (err,k){
    // k is functions argument
    if (err) return console.log(err);
    k.speak(); //THis is to check whether our code is exceuted or not
});


// We are not using mongoshell any more we will do that from nodejs commands here

// find filter is done


Cars.find({name:"Buggati Ceintod"},function (err,a){
    if (err) return console.log(err);
    console.log(a);
})