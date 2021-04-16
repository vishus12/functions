// Part 1: Functions
const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7

    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(45)
console.log(dogAge)

// Part 2: Best in Show
const bestInShow = (dogBreed) => {
    if (dogBreed === "meow") {
        return "I like cats"
    }
    return "My favorite dog breed is " + dogBreed
}
const VishalsFavorite = bestInShow("meow")
const BryansFavorite = bestInShow("golden retrievers")
console.log("When it comes to pets, " + BryansFavorite)
console.log("When it comes to pets, " + VishalsFavorite)

// Part 3: Addition
const add = (a, b, c) => {
    return a + b + c;
}
let result = add(17, 4, 11)
console.log(add(17, 4, 11));

// Part 4: Self-Driving Cars
const go = (direction, speed) => {
    if (speed === 82) {
        return "SLOW DOWN!"
    }
}
// return "The car is moving" + direction, "at" + speed, + "mph"

const movingForwards = go("forwards", 45)
const movingBackwards = go("backwards", 8)
const goingInCircles = go("circles", 12)

console.log("The car is moving," + goingInCircles)

//     if (direction === "forwards") {
//         return "The car is moving forwards at 45 mph."
//     }
//     if (direction === "backwards") {
//         return "The car is moving backwards at 8 mph."
//     }
//     if (speed === "circles") {
//         return "The car is moving in circles at 12 mph."
//     }
// }


// Part 5: Evens or Odds
// const number = prompt("Enter a number: 5");

// const result = (number % 2  == 0) ? "even" : "odd";

// console.log(`The number is ${result}.`);

// // Part 6: Practice: Double Functions
// const words = [
//     "The", "killing", "complex", "houses",
//     "married", "kittens", "and", "single",
//     "soldiers", "and", "their", "kleptomaniacal",
//     "families"
// ]

// /*
//     Function to filter out `k` words
//     (Google 'javascript startswith' to get started)
//  */
// const kFilter = words.startsWith("k");

// /*
//     Function to build a single string from the array
//     (Google 'javascript combine all items in array' to get started)
//  */
// words.join();


// /*
//     Invoke the filtering function and store its return value
//  */
// const result = words.filter(word => word.length > 13);

// console.log(result);


// /*
//     Invoke the string building function, and pass the
//     return value of the previous function as an argument
// */


// console.log()

// //Practice: You Can Tune a Piano, But You Can't...
// function Math.random(val) * 2 {
//     if (val <= 1 || val >= 1){
//         return "Sven hooked a tuna!  :)";
//     }
//     return "Sven came up empty-handed.  :(";
// }





