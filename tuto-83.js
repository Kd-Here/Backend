//###############################
// # Here learning about deletion in mongodb
//###############################


// show dbs
//use kdCart
//show collections
//db.items.find()


db.items.deleteOne({"Price":"2k$"})
// remember that delete option is taking same object type as find takes i.e. we can pass same condition where we wanted to delete. But this will delete only first object
// now if you wanted to delete all possible object then use deleteMany  


db.items.deleteMany({"Price":"2k$"})
// This will delete all the objects with condition satisfying

db.items.insertOne({"Name":"Samasung s21 ultra",Price:200000,"Features":["Spen","Wireless-Charging","Night-vision"],Rating:4.9})

// Insert many uses arry 
db.items.insertMany([

    {
        "Name":"Samasung Galaxy Fold",Price:150000,"Features":["Spen","Wireless-Charging","Night-vision","Folding"],Rating:4.8
    },
    
    {
        "Name":"Iphone 12",Price:120000,"Features":["Wireless-Charging","3Camera for 3 varient","Folding"],Rating:4.7

    },
    {
        "Name":"Iphone 13",Price:120000,"Features":["Wireless-Charging","Nodge system","Folding"],Rating:4.7,"Latest":"Yes"

    }
]
)