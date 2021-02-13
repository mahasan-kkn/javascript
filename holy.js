function myselect() {
    let x = document.getElementById("num").value;
    let memmo = [];
    for(let i = 0; i < x.length ; i++){
    memmo.push(x[i]);
    }
    console.log(memmo);
    let dog = [];
    for(let i = 0; i < memmo.length-2; i++){
      let cat = memmo[i];
      for(let j = 1+i; j < memmo.length-1; j++){
      let rat = cat+memmo[j];
      dog.push(rat);
      }
    }
    console.log(dog);
    let wing = []
    for(let k = 0; k < dog.length; k++){
      let rat = dog[k];
      for(let t = 2+k; t < memmo.length; t++){
      let mat = rat+memmo[t];
      wing.push(mat);
      }
    }
    console.log(wing);
    //document.getElementById("result").innerHTML = memmo;
    }
