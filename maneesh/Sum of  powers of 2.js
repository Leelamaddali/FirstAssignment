/*Sum of powers of 2
/* https://www.codewars.com/kata/5d9f95424a336600278a9632
const powers = n => {
 if (n == 1) return [1]
 let all_powers = []
 let i = 0;
 while (2**i <= n) {
   all_powers.push(2**i);
   i++
 }
 let remainder = n;
 let answer = []
 while (remainder > 0) {
   while (all_powers[all_powers.length-1] > remainder) all_powers.pop()
   answer.push(all_powers.pop())
   remainder = remainder - answer[answer.length-1]
 }
 
 return answer.sort((a,b) => a-b);
 
}