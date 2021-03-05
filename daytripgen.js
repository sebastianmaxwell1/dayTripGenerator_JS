// (5 points): As a developer, I want to make at least three commits.

let travlerName = "Sebastian";
console.log(travlerName);

// As a user, I want a destination to be randomly selected for my day trip.



console.log(randomPlace);

function getAnotherDes(destinationArray, last = destinationArray) {
    if (destinationArray.length === 0) {
      return;
    } else if (destinationArray.length === 1) {
      return destinationArray[0];
    } else {
      let num = 0;
      do {
        num = Math.floor(Math.random() * destinationArray.length);
      } while (destinationArray[num] === last);
      return destinationArray[num];
    }

    console,log(getAnotherDes);
}



function generateTrip(){
    let destinationArray = ["Florida", "Ireland", "Japan", "Kansas", "Guam"]
    let restaurantArray = ["Seafood", "Local Pub", "Sushi", "Chipotle", "Hard Rock Cafe"];
    let transportationArray = ["Plane", "Boat", "Car", "Unicycle"];
    let entertainmentArray = ["Live Music", "Theater", "Sporting Events", "Alcohol"];

    //loop it
    let randomPlace = getRandomValueFromArray(destinationArray);
    let randomResturant =getRandomValueFromArray(restaurantArray);
    let randomTransportation = getRandomValueFromArray(transportationArray);
    let randomEntertainment =getRandomValueFromArray(entertainmentArray);

    




}

function getRandomValueFromArray(anArray){
    return anArray[Math.floor(Math.random()*anArray.length)];
}



generateTrip();