/*Descending Order
/*https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n){
   return parseInt(n.toString(10).split('').sort(function(a, b){
      return b - a;
    }).join(''));
}