let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ ?")
for(var i = 0; i < round; i++){
  var answer = prompt("หัว หรือ ก้อย")
  var ramdom_answer = "" 
  if(Math.floor(Math.random*10) <= 4){
//หัว
ramdom_answer = "หัว"
  } 
  else{
//ก้อย
ramdom_answer = "ก้อย"
  }
  if(answer == ramdom_answer){
   alert("ยินดีด้วย")   
  }
  else{
alert("เสียใจด้วย")
  }
  console.log(ramdom_answer + " : " + answer)
}