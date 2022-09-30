//show dbs :- this will show all present database on your pc
// Choose from one of avaiable database 
//show collections :- this will show all the tables in selected db

// db.items.find() :- show content of db
// inside of find function we can give a filter object which can or find for the value satisfying the condition
// db.items.find({Price : 2000}) here we are giving price filter for 2k$

//We can also modify the filter object by {Price : {$gte:2000}} this will give object whose price is greater then equal to 2000

//we can also pass many filter condition just separate them by comma
// {Price : {$gte:2000},Rating : {$lt:4.5}}  lt is less then so we simply finding an object whose price is greater then 2000 and rating less then 4.5

// What we want to give or condition while finding for an object 
// db.items.find({$or:[{Price:2000}, {Rating: {$gte:4.5}}]})
// in simple words it's

db.items.find({
    $or:[
        { Price:{$gte:4000}},{ Rating: {$lte:4.3}}
    ]
})

// Projects in find
// To get or to show different fields for given condition showing mobile name for phones with rating below and equal 4 and price greater 3000
// db.items.find({price:{$gte:3000},rating :{$lte:4}}, {Name:1})
// Here with Name we can also see data for origin nation also

//  db.items.find({Price:"2k$"},{Name:1,qty:1})
// this will give us mobile name and quatity in stock whose price is between 2k$