
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
    context.lineTo(900,400);
    context.stroke();
    // y axis
    context.beginPath();
    context.moveTo(100,400);
    context.lineTo(100,100);
    context.stroke();
    // line
    context.lineWidth = 2;
    context.strokeStyle= "#ff0000";
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(100,300);
    context.lineTo(400,200);
    context.stroke();

    // frame
    context.lineCap = "square";
    context.beginPath();
    context.strokeStyle = "#000000";
    context.rect(0,0,1000,500);
    context.stroke();

}
