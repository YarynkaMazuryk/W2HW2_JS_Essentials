
function averageNumbers(setOfNumbers) {
    let sum = setOfNumbers.reduce(function (previousValue, currentItem) {
        return previousValue + currentItem;
    });
    return roundValue(sum, setOfNumbers);
}

function roundValue(arg, array) {
    let value = arg / array.length;
    return value.toFixed(2);
}

let array = [1, 5, 5];
console.log( averageNumbers(array) );