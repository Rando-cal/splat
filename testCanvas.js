changeCanvasColor = () => {
    let canvas = document.getElementById("mycanvas")
    let context = canvas.getContext("2d");
    context.fillStyle= "blue"
    context.fillRect(0,0, canvas.clientWidth,canvas.height)

}

document.addEventListener('DOMContentLoaded', changeCanvasColor)