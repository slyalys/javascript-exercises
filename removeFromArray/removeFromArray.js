const removeFromArray = function(...args) {
    //need more practice with arrays
    const array = args[0];
    return array.filter(val => !args.includes(val));
   
}

module.exports = removeFromArray
