






































































































function change1(){
    var color3 = document.getElementById("color3").value ;
    var color4 = document.getElementById("color4").value ;
    var deg1 = document.getElementById("number1").value;
    var gradient1 = "linear-gradient("+deg1+ ","+  color3  + "," +  color4  +")";
    document.body.style.backgroundImage= gradient1;
}


function change(){
    var color1 = document.getElementById("color1").value ;
    var color2 = document.getElementById("color2").value ;
    var deg = document.getElementById("number").value;
    var gradient = "linear-gradient("+deg+ ","+  color1  + "," +  color2  +")";
    document.getElementsByClassName("button1")= gradient;
}



