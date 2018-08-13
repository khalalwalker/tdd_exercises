const repeatString = function (str, num) {
    if (num >= 1) {
        return str.repeat(num);
    } else if (num < 0) {
        return "ERROR";
    } else if (num === 0) {
        return "";
    }
}

module.exports = repeatString;
