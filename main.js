//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

// 5 ❎ .....false
// 5 ✅ ......true (without remaining) >>>> use module %

function divByFive(num) {
    if (num % 5 === 0) {
        return true;
    } 
    else {
        return false;
    }
}
console.log(divByFive(5));
console.log(divByFive(-55));
console.log(divByFive(37));