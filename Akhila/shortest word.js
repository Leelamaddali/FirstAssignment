/*Shortest Word
/*https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s){
  var arr = s.split(' ');
  var smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].length < smallest.length){
      smallest = arr[i];
    }
  }
  return smallest.length;
}