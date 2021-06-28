function mult(x, y = 1) {
    let result = Math.pow(x, y);     
    return result;
}
  
let x = +prompt('First num');
let y = +prompt('Second num');  

let res = isNaN(x) || isNaN(y) ? alert('Error, it is NaN') : alert( mult(x, y) );