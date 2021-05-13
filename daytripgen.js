"use strict";
console.log("Random Trip!")

    // let destinationArray = ["Florida", "Ireland", "Japan", "Kansas", "Guam"]
    // let restaurantArray = ["Seafood", "Local Pub", "Sushi", "Chipotle", "Hard Rock Cafe"];
    // let transportationArray = ["Plane", "Boat", "Car", "Unicycle"];
    // let entertainmentArray = ["Live Music", "Theater", "Sporting Events", "Alcohol"];

    let destinationArray = ["Florida", "Ireland", "Japan", "Kansas", "Guam"]
    function destinationSelector() {
        let destinations = Math.floor(Math.random() * destinationArray.length);
        return destinationArray[destinations];
    }
    let destinationResult = destinationSelector();
    console.log(destinationResult);


    let restaurantArray = ["Seafood", "Local Pub", "Sushi", "Chipotle", "Hard Rock Cafe"];
    function restaurantSelector() {
        let restaurants = Math.floor(Math.random() * restaurantArray.length);
        return restaurantArray[restaurants];
    }
    let restaurantResult = restaurantSelector();
    console.log(restaurantResult);

    let transportationArray = ["Plane", "Boat", "Car", "Unicycle"];
    function transportationSelector() {
        let transportation = Math.floor(Math.random() * transportationArray.length);
        return transportationArray[transportation];
    }
    let transportationResult = transportationSelector();
    console.log(transportationResult);


