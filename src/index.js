module.exports = function reverse (n) {
    let positive = Math.abs(n);
    return positive.toString().split('').reverse().join('');
}
