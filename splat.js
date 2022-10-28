"use strict";


// Game init
const Game = {
    canvas: undefined,
    canvasContext: undefined,
    ballSprite: undefined,
}
    

Game.ballSprite = {
    src : "blue.png",
    width: 35,
    height: 63
}


Game.update = () => {
    let d = new Date()
    let currentSystemTime = d.getTime()
}

Game.clearCanvas = () => {
    Game.canvasContext.clearBall(0,0, Game.canvas.width, Game.canvas.height)
}



Game.drawImage = (sprite, position) => {
    Game.canvasContext.save();
    // Game.canvasContext.translate(position.x, position.y)
    Game.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height,
        0,0, sprite.width, sprite.height)
    Game.canvasContext.restore();
}

Game.draw = () => {
    Game.drawImage(Game.ballSprite, {x :100, y: 100})
}

Game.mainLoop = () => {
    // ? Game.update()
    Game.draw()
}

Game.start = () => {
    Game.canvas = document.getElementById("myCanvas");
    Game.canvasContext = Game.canvas.getContext('2d');
    Game.ballSprite = new Image();
    Game.ballSprite.src = "./sprites/blue.png"
    // waits half a second for sprite to load.Not a loop                        
    window.setTimeout(Game.mainLoop, 500);
    
}

document.addEventListener('DOMContentLoaded', Game.start)                         