function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// eslint-disable-next-line no-extend-native
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

export { getRandomInt }