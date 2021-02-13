function myselect() {
    var x = document.getElementById("num").value;
    
    var memmo = [];
    for(let i = 0; i < x.length ; i++){
    memmo.push(x[i]);
  } 
  document.getElementById("result").innerHTML = memmo;
  }
