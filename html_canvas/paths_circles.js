
function _(id){
    return document.getElementById(id);
}

function main(){
    var canvas_handler = _("upper_canvas");
    var context = canvas_handler.getContext("2d");

    // x axis
    context.lineWidth = 3;

    context.beginPath();
    context.moveTo(100,400);
    context.quadraticCurveTo(250,150,400,400);
    context.stroke();

    context.beginPath()
    context.arc(250,150,80,0,2*Math.PI,false)
    context.fillStyle = "red";
    context.fill();
}
