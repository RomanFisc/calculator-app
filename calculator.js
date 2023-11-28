const add = function(...nums) {
    return nums.reduce((acccumulator, currentNum) => acccumulator + currentNum, 0);
};
//console.log(add(1,5,6,7,8,0));

const subtract = function(...nums) {
    return nums.reduce((acccumulator, currentNum) => acccumulator - currentNum);
}
//console.log(subtract(30, 20, 4));

const multiply = function(...nums) {
    return nums.reduce((acccumulator, currentNum) => acccumulator * currentNum);
};
//console.log(multiply(3,4,6));

const divide = function(...nums) {
    return nums.reduce((acccumulator, currentNum) => acccumulator / currentNum);
};
//console.log(divide(20, 2, 3));

let num1;
let num2;
let operator = '*';

const operate = function(num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '/') {
        return divide(num1,num2);
    } else if (operator === '*') {
        return multiply(num1,num2);
    };
};
//console.log(operate(4,5));




