const repeatString = function(a, b) {
    let c = '';
    if (b < 0) {
        return 'ERROR'
    }
    for (i = 0; i < b; i++) {
        c += a;
    }
    //c = a;
    return c;

}

module.exports = repeatString
