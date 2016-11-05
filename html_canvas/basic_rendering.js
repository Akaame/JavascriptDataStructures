
function _(id){
    return document.getElementById(id);
}

function main(){
    var canvas_handler = _("upper_canvas");
    var context = canvas_handler.getContext("2d");

    context.font = "100px Helvetica";
    context.fillStyle = "black";
    // fillstyle => color,gradient or pattern
    context.fillText("Hello World!",0,100);
    // fill text parameter => first x second y of bottom left corner
}
