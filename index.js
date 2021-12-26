var num =prompt("Enter the number");
var flag = 0;
for (var i=2;i<num;i++){
  if (num%2==0){

  flag =1;
  break;
 }
}

if (flag==0) {
  alert("The number is prime ");
}
 else {
   alert("The number is not prime ");
 }
