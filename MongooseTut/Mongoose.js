// Mongoose is a js lib that connects mongodb with nodejs
//Mongo compass is gui for mongoshell what we are doing after establishing mongod can be done in mongo compass without coding.


// getting-started.js
// Refer official documents
// https://mongoosejs.com/docs/#



const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/kdCart');
  console.log("We are connected with Nodejs and Mogodb usign Mongoose.");
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}





const kitySchema = new mongoose.Schema(
    { name : String }
);

kitySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };
  

const Clss = mongoose.model('Kity',kitySchema);
const fluffy = new Clss({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"
