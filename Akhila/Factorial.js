/*Factorial
/*https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc

factorial = n => {
  if (n < 0 || n > 12) throw RangeError;
  return n > 1 ? n * factorial(n - 1) : 1;
}