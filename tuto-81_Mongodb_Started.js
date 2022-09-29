// Open 2 Powershell terminal as admin 1 for mongo and other for mongod

// use Kdcar is used to created and change database.
//https://www.mongodb.com/docs/manual/crud/

// Primary key in mongo db is object id

// MongoDB stores data records as BSON documents. BSON is a binary representation of JSON documents, though it contains more data types than JSON. 

// show dbs to see all database in pc

use kdCart //This is command to change or to create a database


// Once you have got this:- switched to db kdCart
// so you can access that kdCart database by using only db to access any field n it's value use db.items


// Document Structure
// MongoDB documents are composed of field-and-value pairs and have the following structure:
// {
//     field1: value1,
//     field2: value2,
//     field3: value3,
//     ...
//     fieldN: valueN
//  }


// This for inserting only one object if you wanted inserting many
db.items.insertOne({
    'Name':'Samsung S21 Ultra',
    'Price': "2k$",
    'Camera':'50px',
    'qty':9899,

})

// Inserting many object but remember they are in form of arrys
db.items.insertMany([{
    'Name':'Samsung S21 Ultra',
    'Price': "2k$",
    'Camera':'50px',
    'qty':9899,
    'isFoldeable':"True"

},
{'Name':'Apple S21 Ultra',
'Price': "2k$",
'Camera':'50px',
'qty':9899,
}])


// If you wanted to see the object type db.items.find()
// This is the output
// { "_id" : ObjectId("63351eeb067f40ff608330b9"), "Name" : "Samsung S21 Ultra", "Price" : "2k$", "Camera" : "50px", "qty" : 9899 }
// { "_id" : ObjectId("63351fde067f40ff608330ba"), "Name" : "Samsung S21 Ultra", "Price" : "2k$", "Camera" : "50px", "qty" : 9899 }
// { "_id" : ObjectId("63351fde067f40ff608330bb"), "Name" : "Apple S21 Ultra", "Price" : "2k$", "Camera" : "50px", "qty" : 9899 }