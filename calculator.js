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
