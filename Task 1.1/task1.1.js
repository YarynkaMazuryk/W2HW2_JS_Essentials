function isNumeric(number) {
    return !isNaN(parseFloat(number));
}
function converter(money, rate) {
    if (isNumeric(money) || isNumeric(rate)) {
        let convertToUSD = money * rate;
        let convertToUAN = convertToUSD / rate;
        alert(`${money} USD --> ${convertToUSD} UAN 
        ${convertToUSD} UAN --> ${convertToUAN} USD`);
    }
    else {
        alert("Please enter the number");
    }
}
let money = prompt("Enter the amount of money in dollars", " ");
let rate = prompt("Enter the dollar exchange rate", " ");
converter(money, rate);