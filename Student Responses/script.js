var green = 0;
var amber = 0;
var red = 0;
var total = 0;
import { stat as _stat, appendFile, writeFile } from 'fs';
import json2csv from 'json2csv';

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
  document.getElementById("myBody").innerHTML = 'green is '+green + ' amber is '+amber+ ' red is '+red; 
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

var newLine = '\r\n';

var appendThis = [
  {
    red: '0',
    amber: '10',
    green: '23'
  }
];

var toCsv = {
  data: appendThis,
  fields: fields,
  header: false,
};

_stat('responses.csv', function (err, stat) {
  if (err == null) {
    console.log('File exists');

    //write the actual data and end with newline
    var csv = json2csv(toCsv) + newLine;

    appendFile('file.csv', csv, function (err) {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  }
});
};