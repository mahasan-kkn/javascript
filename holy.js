function myfunction(){
    var x, text;
    x=document.getElementById("numb").value;
    if(isNaN(x)){
        text = "กรอกข้อมูลใหม่";
    }else{
        text = "ค่าที่ได้ = ";
    }
    document.getElementById("result").innerHTML = text+x;
}

