
let arraySym = ["#"];
function addSymbol(numbers,arraySymbols) {
    for (let i = 0; i < numbers; i++) {
        console.log(arraySymbols.join(''));
        arraySymbols.push("#");
    }
}
addSymbol(7,arraySym);


let arrSymRec = ["#"];
function addSymbolRec(numbers,arraySymbols) {
    if (numbers > 0) {
        console.log(arraySymbols.join(""));
        arraySymbols.push("#");
        return addSymbolRec(numbers - 1,arraySymbols);
    }
}
addSymbolRec(7,arrSymRec);
