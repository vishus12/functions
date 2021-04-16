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
    if (direction === "forwards" && speed === 45) {
        return "The car is moving forwards at 45 mph."
    }
    if (direction === "backwards" && speed === 8) {
        return "The car is moving backwards at 8 mph."
    }
    if (direction === "circles" && speed === 12) {
        return "The car is moving in circles at 12 mph."
    }
    if (speed === 83) {
        return "SLOW DOWN!"
    }
}

const movingForwards = go("forwards", 45)
const movingBackwards = go("backwards", 8)
const goingInCircles = go("circles", 12)

console.log(`${goingInCircles}`)
console.log(`${movingBackwards}`)
console.log(`${movingForwards}`)

// Part 5: Evens or Odds

const evenOrOdd = (x) => {
    if (x % 2 == 0) {
        return "The number is even.";
    }

    else {
        return "The number is odd.";
    }

}
console.log(evenOrOdd(10))
console.log(evenOrOdd(9))

// Part 6: Practice: Double Functions
const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */
const kFilter = words.startsWith("k");

/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */
words.join();


/*
    Invoke the filtering function and store its return value
 */
const result = words.filter(word => word.length > 13);

console.log(result);


/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/


console.log()

// //Practice: You Can Tune a Piano, But You Can't...
// function Math.random(val) * 2 {
//     if (val <= 1 || val >= 1){
//         return "Sven hooked a tuna!  :)";
//     }
//     return "Sven came up empty-handed.  :(";
// }





