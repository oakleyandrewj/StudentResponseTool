var green = 0;
var amber = 0;
var red = 0;
var total = 0;

function addGreen() {
  green += 1;
  console.log(green);   
}
function addAmber() {
  amber += 1;   
  console.log(amber); 
}
function addRed() {
  red += 1;  
  console.log(red); 
}
function calcTotals() {
  document.getElementById("myBody").innerHTML = 'green is '+green + ' amber is '+amber+ ' red is '+red; 
  //console.log(total); 
}