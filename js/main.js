function insert(num){
    document.getElementById("input").value=document.getElementById("input").value + num;
}
function operation(p){
var x=document.getElementById("input").value;
alert(x);
operateur=p;
alert(p);
document.getElementById("input").value="";


}
function somme(x,y){
    document.getElementById("input").value=x+y; 
}
function multi(x,y){
    document.getElementById("input").value=x*y; 
}
function div(x,y){
    document.getElementById("input").value=x/y; 
}
function mod(x,y){
    document.getElementById("input").value=x%y; 
}
function egale(){
    var y=document.getElementById("input").value;
    alert(y);
    operation();
}