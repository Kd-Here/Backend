function updatemap(){

    // Fetch api :- it use to bring data from given file and load them
    // traditionaly we used XML request to deal this

    // https://www.w3schools.com/jsref/api_fetch.asp
    fetch('/data.json')
    .then(response => response.json()) //Here response is what js brings back in nxt then we used rsp as shortform for response
    .then(rsp => {

        rsp.data.forEach(element => {
            latitude = element.latitude
            longitude = element.longitude
            covidpos = element.infected


            if (covidpos > 1000){
                ChoiceColor = `black`
            }
            else{
                ChoiceColor = `rgb(${covidpos}, 0, 0)`
            }

            //   Adding map markers


            new mapboxgl.Marker({
                draggable:false,
                color: ChoiceColor
            })
                .setLngLat([longitude,latitude])
                .addTo(map);
            });
        // new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
        //    console.log(element.longitude,element.latitude);

        



        // My approach better way is above
        // let i = 0;
        // // var ln = (rsp.data[1].arry[2]);   understand the meaning of json . and [] accessing . is used for dictionary access and [] is for index of arry our data is and arry so we using [] and inside data all are just dict
        // var ln = (rsp.data).length;
        // while (i < ln ){ 
        //     console.log(rsp.data[i]["name"],rsp.data[i].longitude,rsp.data[i].latitude);
        //     i++;
        // }
    })
}

updatemap();