"use strict";
console.log("Hello")

    // let destinationArray = ["Florida", "Ireland", "Japan", "Kansas", "Guam"]
    // let restaurantArray = ["Seafood", "Local Pub", "Sushi", "Chipotle", "Hard Rock Cafe"];
    // let transportationArray = ["Plane", "Boat", "Car", "Unicycle"];
    // let entertainmentArray = ["Live Music", "Theater", "Sporting Events", "Alcohol"];

    let destinationArray = ["Florida", "Ireland", "Japan", "Kansas", "Guam"]
    function destinationSelector() {
        let destinations = Math.floor(Math.random() * destinationArray.length);
        return destinationArray[destinations];
    }
    let result = destinationSelector();
    console.log(result);



