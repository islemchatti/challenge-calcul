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
    return x + y; 
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
function clear(){
    document.getElementById("results").value="";
}