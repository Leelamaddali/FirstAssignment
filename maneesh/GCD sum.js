/* GCD sum 
/* https://www.codewars.com/kata/5dd259444228280032b1ed2a


function solve(sum,gcd){
  let result = []
  if (sum % gcd != 0){
    return -1
  }else{
    result.push(gcd);
    result.push(sum - gcd);
    return result;
  }
}