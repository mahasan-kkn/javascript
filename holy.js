function myselect() {
    let x = document.getElementById("num").value;
    let memmo = [];
    for(let i = 0; i < x.length ; i++){
    memmo.push(x[i]);
    }
    console.log(memmo);
    let leng = memmo.length;
    let total = [];
    for(let j = 0;j < leng-2;j++){
      let a = memmo[j];
      for(let k = j+1; k < leng-1; k++){
        let b = memmo[k];
        for(let t = k+1; t < leng; t++){
          let c = memmo[t];
          total.push(a+b+c);
        }
      }
    }console.log(total);
    document.getElementById("result").innerHTML = total;
    }
