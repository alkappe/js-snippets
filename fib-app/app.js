
function fib (i) {
  if(i==1){
    return 2;
  } else if (i==2) {
    return 3;
  } else {
    return fib(i-1) + fib(i-2);
  }
}
var tot = fib(29)
console.log(tot)
