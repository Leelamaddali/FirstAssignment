function descendingOrder(n){
   return parseInt(n.toString(10).split('').sort(function(a, b){
      return b - a;
    }).join(''));
}