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

fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5", {
  method: "GET"
})
  .then(
    function (response) {
      if (response) {
        response.json().then(function (data) {
          const usdRate = data[0].buy
          converter(money, usdRate)
        });
      }
    }
  )
  .catch(function (err) {
    console.log('Error:', err);
  });

let money = prompt("Enter the amount of money in dollars", " ");
