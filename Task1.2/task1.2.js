function getMinAndMax (setOfNumbers) {
    const min = Math.min.apply(null,setOfNumbers);
    const max = Math.max.apply(null,setOfNumbers);
    return {min:min, max: max}
}
let array = [-5,-6,-20,45,100,85,63,8,-10,0];
console.log( getMinAndMax(array) );
