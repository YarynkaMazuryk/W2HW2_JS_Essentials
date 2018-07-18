function output(array) {
    console.log(`Min: ${array[0]} Max: ${array[array.length - 1]}`);
}
function minAndMax(array) {
    array.sort(function (a, b) {
        return a - b;
    });
    output(array);
};
let setOfNumbers = [1, -5, -7, 10, 20, -10, 0, 100, 54, 96, -20];
minAndMax(setOfNumbers);
