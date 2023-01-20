var canvas=document.getElementById("myCanvas");
var contexto=canvas.getContext("2d");
var mouseEvent="vazio";
var ultimaPosicaoX;
var ultimaPosicaoY;
var cor="green";
var largura=1;

canvas.addEventListener("mouseown", mouseParaBaixo);
function mouseParaBaixo(){
    mouseEvent="mousedow";
}


canvas.addEventListener("mouseup", mouseParacima);
function mouseParacima(){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", mousesai);
function mousesai(){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", mousemove);
function mousemove(evento){
    var x=evento.clientX-canvas.offsetLeft;
    var y=evento.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedow"){
        
    }

}
Canvas=document.getElementById("myCanvas");
 ctx= canvas.getContext("2d");

 function myMouseDown(e)

 {
 //Atividade Adicional Inicio
 
 color= document.getElementById("color").value; 
 widthLine = document.getElementById("widthLine").value; 
 //Atividade Adicional Final
 
 radius = document.getElementById("radius").value;
 
 mouseEvent = "mouseDown";
 }

 Function myMouseMove(e)

{
PositionMouseX = e.clientX - canvas.offsetLeft; PositionMouseY = e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown") { 
console.log("Current position of x and y coordinates = ");

console.log("x -" + PositionMouseX + "y-" + PositionMouseY);

ctx.beginPath();

ctx.strokeStyle - color;

ctx.linewidth-widthline; ctx.arc(PositionMouseX, Position MouseY, radius,0, 2 * Math.PI);

ctx.stroke();
}