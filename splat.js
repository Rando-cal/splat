"use strict";
// RUN splat.html not this one :)

// Game init
const Game = {
    canvas: undefined,
    canvasContext: undefined,
    backgroundSprite: undefined,
    ballSprite: undefined,
    ballPosition: { x : 0, y : 50},
    ballPosition1: { x : 0, y : 50},
    ballPosition2: { x : 0, y : 50},
    ballPosition3: { x : 0, y : 50}
}

Game.update = () => {
    let d = new Date()
    // let currentSystemTime = d.getTime()
    Game.ballPosition1.x = d.getTime() % Game.canvas.width;
    Game.ballPosition2.x = (d.getTime() + 100) % Game.canvas.width;
    Game.ballPosition3.x = (d.getTime() +  200) % Game.canvas.width;
}

Game.clearCanvas = () => {
    Game.canvasContext.clearBall(0,0, Game.canvas.width, Game.canvas.height)
}


Game.drawImage = (sprite, position) => {
    Game.canvasContext.save();
    Game.canvasContext.translate(position.x, position.y)
    Game.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height,
        0,0, sprite.width, sprite.height)
    Game.canvasContext.restore();
}

Game.draw = () => {
    // Game.drawImage(Game.backgroundSprite, { x : 0, y : 0})
    Game.drawImage(Game.ballSprite, Game.ballPosition)
    Game.drawImage(Game.ballSprite, Game.ballPosition2)
    Game.drawImage(Game.ballSprite, Game.ballPosition3)
    Game.drawImage(Game.ballSprite, {x:30, y: 360})
    Game.drawImage(Game.ballSprite, {x:50, y: 80})
    Game.drawImage(Game.ballSprite, {x:100, y: 300})
    Game.drawImage(Game.ballSprite, {x:180, y: 330})
}

Game.mainLoop = () => {
    Game.update()
    console.log("looped")
    Game.draw()
}

Game.start = () => {
    Game.canvas = document.getElementById("myCanvas");
    Game.canvasContext = Game.canvas.getContext('2d');
    Game.ballSprite = new Image();
    Game.ballSprite.src = "./sprites/blue-small.png"
    // waits half a second for sprite to load.Not a loop                        
    // window.setTimeout(Game.mainLoop, 500);
    window.setTimeout(Game.mainLoop, 1000 / 60)
}

document.addEventListener('DOMContentLoaded', Game.start)                         