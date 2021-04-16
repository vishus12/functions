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
console.log(result);

// Part 4: Self-Driving Cars
const go = (direction, speed) => {
    if (speed < 75) {
        return "The car is moving " + direction + " at " + speed + " mph"
    } else (speed > 75); {
        return "Slow Down"
    }
}
const movingForwards = go("forwards", 45)
const movingBackwards = go("backwards", 8 )
const goingInCircles = go("circles", 12)
result = go("circles", 83)

console.log(movingForwards)
console.log(movingBackwards)
console.log(goingInCircles)
console.log(result)

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
// //Practice 7: You Can Tune a Piano, But You Can't...

const heads = 0;
const tails = 0;
const flip = (x) => {
    if (x) {
        const x = (Math.floor(Math.random() * 2) == 0);
        flip("heads");
    } else {
        flip("tails");
    }
};
console.log(flip(2))

