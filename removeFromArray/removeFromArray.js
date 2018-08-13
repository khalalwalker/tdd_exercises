const removeFromArray = function (arr, ...values) {
    // will filter the array to return new array of numbers not included in ...values input
    return arr.filter(num => ![...values].includes(num));

}

module.exports = removeFromArray
