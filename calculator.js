function plus(a, b) {
    return Number(a) + Number(b);
}

function minus(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    if(Number(a)/Number(b)==Infinity){
        return 'Division by zero error';
    }
    return Number(a) / Number(b);
}