/*7 kyu
Square Every Digit

/*https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};