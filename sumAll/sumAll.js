const sumAll = function (num1, num2) {
    let sum = 0;

    if ((typeof num1 == "number") && (typeof num2 == "number") && (num1 > -1 && num2 > -1)) {
        if (num1 <= num2) {
            for (var i = num1; i <= num2; i++) {
                sum += i;
            }
            return sum;
        } else { // if num2 < num1
            for (var i = num2; i <= num1; i++) {
                sum += i;
            }
            return sum;
        }
    } else { // If the input is not a number or is negative
        return 'ERROR';
    }
}

module.exports = sumAll
