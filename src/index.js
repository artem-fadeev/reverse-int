module.exports = function reverse (n) {
    let str = ('' + n).split('');
    let result = [];
    for(let i = str.length - 1; i >= 0 ; i--) {
      result.push(str[i]);
    }
    return parseInt(result.join(''));
    
    // return parseInt((n+'').split('').reverse().join('')); - with reverse() function
}
