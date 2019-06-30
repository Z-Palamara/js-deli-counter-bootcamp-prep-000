katzDeliLine = []
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  return (katzDeliLine.length>0 ? `Currently serving ${katzDeliLine.shift()}.`:"There is nobody waiting to be served!")
}

function currentLine(katzDeliLine){
  var i; 
  for (i = 0, i<katzDeliLine.length; i++){
  return (katzDeliLine.length>0 ? `The line is currently: ${katzDeliLine}`: "The line is currently empty.")
  }

// You can write:
// var i;
// for (i = 0; i < cars.length; i++) { 
//   text += cars[i] + "<br>";
// }