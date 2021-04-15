// Part 1: Functions
const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7

    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(45)
console.log(dogAge)

// Part 2: Best in Show
const specificDogBreed = (favoriteDogBreed) => {
    const dogBreed = favoriteDogBreed

    return dogBreed
}

const favoriteDog = specificDogBreed()
console.log(favoriteDog)

// Part 3: Addition
function add(num1, num2) {
    let res = num1 + num2
    return num1 + num2
}
add(17, 4)
console.log(res)

const add = function (num1, num2) {
    return num1 + num2
}

// Part 4: Self-Driving Cars


//Part 5: Evens or Odds
const number = prompt("Enter a number: ");

const result = (number % 2  == 0) ? "even" : "odd";

console.log(`The number is ${result}.`);

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



