//This is file where our module which to import is present

console.log("This is modules files which is imported by index file");


function avera(elemnts) {
    let sum = 0;
    elemnts.forEach(element => {
        sum += element;
    });
    return sum/elemnts.length;
}

// This is statement to export the modules
module.exports = avera;
// this means module should export above function avera



// if you wanted to create obj of moudle export
module.exports = {
    name : "kd",
    aveg : avera,
    rrr : "KGF"
}