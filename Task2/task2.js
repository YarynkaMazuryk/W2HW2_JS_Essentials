function outPutNumbers(number) {
    if (number >= 1) { 
        console.log(number--);
        return outPutNumbers(number);
    }   
}
outPutNumbers(10);