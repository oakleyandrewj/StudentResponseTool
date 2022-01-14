var green = 0;
var amber = 0;
var red = 0;
var total = 0;
var subject = 'my Subject';
var body = 'myBody';

function addGreen() {
  green += 1;
  ClearResult();
  AddResult('Thank You');
}
function addRed() {
  red += 1;  
  ClearResult();
  AddResult('Thank You');
}

function addAmber() {
  amber += 1;  
  ClearResult();
  AddResult('Thank You');
}

function calcTotals() {
  //document.getElementById("myBody").innerHTML = 'green is '+green + ' amber is '+amber+ ' red is '+red; 
  FinishHere();
}
          
function FadeDiv() {
    setTimeout(function() {
        $('#resultDiv').fadeOut('fast');
    }, 2000);
}

function AddResult(myText){
  document.getElementById("resultDiv").innerHTML += '<h1>'+myText+' </h1>'; 
  FadeDiv();
  $("#resultDiv").show();
}

function ClearResult(){
  document.getElementById("resultDiv").innerHTML = ''; 
}

function FinishHere(){
  subject = document.getElementById("lessonName").value;
  body = "For the lesson "+subject+" the students responded as follows: green:"+green+" amber:"+amber+" red:"+red+".";
  window.open('mailto:test@example.com?subject='+subject+'&body='+body+'');
}