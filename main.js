var mouse_event = "empty"
canvas = document.getElementById ("myCanvas") ;
ctx = canvas.getContext ("2d");
color = "darkcyan" ;

canvas.addEventListener("mousedown" , my_mouse_down);
function my_mouse_down(e) {
    color = document.getElementById ("color").value;
    console.log("x = " + mouse_x + "y = " + mouse_y);
    mouse_event = "mousedown";
}
canvas.addEventListener ("mousemove" , my_mouse_move);
function my_mouse_move(e) {
mouse_x = e.clientX-canvas.offsetLeft;
mouse_y = e.clientY-canvas.offsetTop;
if (mouse_event == "mousedown") {
    ctx.beginPath() ;
    ctx.strokeStyle = color ;
    ctx.lineWidth = 2 ;
    ctx.arc(mouse_x,mouse_y,20,0,2*Math.PI);
    ctx.stroke();
}
}

