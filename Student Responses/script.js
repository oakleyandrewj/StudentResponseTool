var green = 0;
var amber = 0;
var red = 0;
var total = 0;
//import { stat as _stat, appendFile, writeFile } from 'fs';
//import json2csv from 'json2csv';
var subject = 'my Subject';
var body = 'myBody';

function addGreen() {
  green += 1;
  //console.log(green); 
  ClearResult();
  AddResult('Thank You');
  //console.log(amber); 
}
function addRed() {
  red += 1;  
  ClearResult();
  AddResult('Thank You');
  //console.log(red); 
}

function addAmber() {
  amber += 1;  
  ClearResult();
  AddResult('Thank You');
  //console.log(red); 
}

function calcTotals() {
  //document.getElementById("myBody").innerHTML = 'green is '+green + ' amber is '+amber+ ' red is '+red; 
  FinishHere();
  //console.log(total); 
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