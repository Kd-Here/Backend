// ###########################
// # CRUD operations in Mongodb
// ###########################


// :- C - CREATE  //create a new  
//         R - READ    //means finds
//         U - UPDATE  //change data
//         D - DELTEION //delete data



// db.items.updateOne({},{})
// we are only updating one  {} -> first object is for finding the element
// {} -> second is for setting the new object

db.items.updateOne({"Features":"Wireless-Charging"},{$set:{"Features":"Radio-wavesCharging"}})


// If you wanted to update many use it
db.items.updateMany({"Features":"Wireless-Charging"},{$set:{"Features":"Radio-wavesCharging"}})


// Wanted to see mobile price and name who have Radio-wavesCharging
// db.items.find({"Features":"Radio-wavesCharging"}, {"Price":1 ,"Name":1})

db.items.find({"Features":"Radio-wavesCharging"}, {"Price":1 ,"Name":1}).sort({"Name":1,"Price":1})



// // // // // Check about how can we change order in projection of find
