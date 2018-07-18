function outPut(array) {
    array.forEach(function (element) {
        console.log(element);
    });
}
function fibonacci(n) {
    if (n > 2) {
        let a = 1;
        let b = 1;
        let temp = [a, b];
        for (let i = 3; i < n + 1; i++) {
            c = a + b;
            temp.push(c);
            a = b;
            b = c;
        }
        outPut(temp);
    }
    else {
        console.log("Enter the numbers > 2");
    }
};
fibonacci(10);

