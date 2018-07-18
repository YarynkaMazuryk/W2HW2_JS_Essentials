function outPutNumbers(number) {
    if (number >= 0) { 
        console.log(number--);
        return outPutNumbers(number);
    }   
}
outPutNumbers(10);