//divide by 4 first
//if true check to see if divisible by 100
//if divisible by 400 a leap year if not, not a leap year
const leapYears = function(year) {
    if(year%4 == 0) {
        if(year%100 == 0 && year%400 == 0) {
            return true;
        }else if(year%100 == 0 && year%400 !=0) {
            return false;
        }
       return true;
    }
    return false;

}

module.exports = leapYears
