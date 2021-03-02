const sumAll = function(a, b) {
    if (a < 0 || b < 0) {
        return 'ERROR'
    }
    if (typeof a != 'number'|| typeof b != 'number') {
        return 'ERROR'
    }
    let finalSum = 0;
    let n = 0;
    let c = Math.abs(b-a);
    let it = (a+b) - 1;
    for (i = 0; i < c; i++) {
        n++;
        finalSum += n;
    }
    return finalSum + it;
}
    

module.exports = sumAll
