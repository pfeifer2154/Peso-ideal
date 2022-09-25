function calculo(){
var nom = document.getElementById("nome").value;
var alt = document.getElementById("altura").value;
var sex = document.getElementById("sexo").value;
var res = document.getElementById("res");
alt=parseFloat(alt);
if (sex=="m"){ 
res.innerHTML="Peso de "+nom+" ideal: "+(72.7*alt-58)+"Kg";
} else if (sex=="f"){
res.innerHTML="Peso de "+nom+" ideal: "+(62.1*alt-44.7)+"Kg";
}
}