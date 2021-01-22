function toCelsius(fahrenheit){
let value = (fahrenheit-32)*5/9
return value.toFixed(2) + "  เซลเซียส"
}
function display(elementId,value){
  document.getElementById(elementId).innerHTML = value
}
alert(toCelsius(150))
display("result",toCelsius(120))