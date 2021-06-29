function mult(x, y = 1) {
    if(isNaN(x) || isNaN(y)) {
        return alert('error')
    }
    else {
        return alert(Math.pow(x, y))
    }
}

let x = +prompt('First num');
let y = +prompt('Second num');  

let result = mult(x, y);