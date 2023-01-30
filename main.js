var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var mouseEvent="vazio";
var ultimaPosicaoX;
var ultimaPosicaoY;
var cor="green";
var largura=1;
var raio=10;

canvas.addEventListener("mousedown", mouseParaBaixo);
function mouseParaBaixo(){
    mouseEvent="mouseDown";
    cor=document.getElementById("cor").value ;
    largura=document.getElementById("largura").value ;
    raio=document.getElementById("raio").value ;
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
    if (mouseEvent == "mouseDown") { 
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + x + "y = " + y);
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.linewidth = largura;
        ctx.arc(x, y, raio ,0 , 2 * Math.PI);
        ctx.stroke();
        }

}
function apagar(){
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}