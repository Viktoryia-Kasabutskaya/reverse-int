module.exports = function reverse(n) {
    const number = n.toString().split("");

    const reversed = number.reverse();

    const reversedNumber = parseInt(reversed.join(""));

    return reversedNumber;
};
