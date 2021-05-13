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

    let entertainmentArray = ["Live Music", "Theater", "Sporting Events", "Alcohol"];
    function entertainmentSelector() {
        let entertainment = Math.floor(Math.random() * entertainmentArray.length);
        return entertainmentArray[entertainment];
    }
    let entertainmentResult = entertainmentSelector();
    console.log(entertainmentResult);

//User should type in field they dont like...
    function reselectTripOptions(){
        document.getElementById("destination-input").value = "";
        document.getElementById("restaurant-input").value = "";
        document.getElementById("transportation-input").value = "";
        document.getElementById("entertainment-input").value = "";
    }
    console.log(reselectTripOptions)