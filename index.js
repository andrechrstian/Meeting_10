function fizzbuzz (param) {
    let result;
    for (let a = 1; a <= param; a++ ) 
{
    if (a % 3 == 0 && a % 5 == 0) {
        result = "FizzBuzz"
    } else if (a % 5 == 0) {
        result = "Buzz"
    } else if (a % 3 == 0) {
        result = "Fizz"
    } else {
        result = param
    }
     
    return result
}

const data1 = fizzbuzz (3)

console.log (data1)


}