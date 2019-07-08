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
    document.getElementById("changing").style.backgroundImage= gradient;
    document.getElementById("changing1").style.backgroundImage= gradient;
    document.getElementById("changing2").style.backgroundImage= gradient;
    document.getElementById("changing3").style.backgroundImage= gradient;
    document.getElementById("changing4").style.backgroundImage= gradient;
    document.getElementById("changing5").style.backgroundImage= gradient;
    document.getElementById("changing6").style.backgroundImage= gradient;
    document.getElementById("changing7").style.backgroundImage= gradient;
    document.getElementById("changing8").style.backgroundImage= gradient;
    document.getElementById("changing9").style.backgroundImage= gradient;
    document.getElementById("changing10").style.backgroundImage= gradient;
    document.getElementById("changing11").style.backgroundImage= gradient;
    document.getElementById("changing12").style.backgroundImage= gradient;
    document.getElementById("changing13").style.backgroundImage= gradient;
    document.getElementById("changing14").style.backgroundImage= gradient;
    document.getElementById("changing15").style.backgroundImage= gradient;
    document.getElementById("changing16").style.backgroundImage= gradient;
    document.getElementById("changing17").style.backgroundImage= gradient;


}





























function insert(num){
    document.getElementById("input").value=document.getElementById("input").value + num;
   
}
function operation(p){
document.getElementById("input2").value =document.getElementById("input").value;
document.getElementById("input3").value=p;
document.getElementById("input").value="";
return operateur;
}
function somme(x,y){
    return (x*1) + (y*1); 
}
function diff(x,y){
    return x-y; 
}
function multi(x,y){
    return x*y; 
}
function div(x,y){
    return x/y; 
}
function mod(x,y){
    return x%y; 
}
function egale(){
    var y=0;
    var x=0;
     y=document.getElementById("input").value;
     x=document.getElementById("input2").value;
    var s=document.getElementById("input3").value;
     if(s=='+'){
        document.getElementById("input").value=somme(x,y);
     }
     if(s=='-'){
        document.getElementById("input").value=diff(x,y)
     }
     if(s=='/'){
        document.getElementById("input").value=div(x,y);
     }
     if(s=='*'){
        document.getElementById("input").value=multi(x,y);
     }
     if(s=='%'){
        document.getElementById("input").value=mod(x,y);
     }
     var res=document.getElementById("input").value;
     document.getElementById("results").value=document.getElementById("results").value+x+s+y+'='+ res;
}
function reset(){
    document.getElementById("input").value="";
    document.getElementById("input2").value="";
    document.getElementById("input3").value="";
}
function clear1(){
    document.getElementById("results").value="";
}