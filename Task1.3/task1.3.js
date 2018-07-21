
function averageNumbers(setOfNumbers) {
    const sum = setOfNumbers.reduce(function (previousValue, currentItem) {
        return previousValue + currentItem;
    });
    return sum/(setOfNumbers.length);
}
let array = [1, 5, 5];
console.log( averageNumbers(array) );