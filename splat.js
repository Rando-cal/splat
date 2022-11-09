"use strict";
// RUN splat.html not this one :)

// !! Not running the animation. Check the loop

// GAME INITs
const Game = {
    canvas: undefined,
    canvasContext: undefined,

    backgroundSprite: undefined,

    ballSprite: undefined,
    
    ballPosition: { x : 0, y : 50},
    ballPosition1: { x : 0, y : 50},
    ballPosition2: { x : 0, y : 50},
    ballPosition3: { x : 0, y : 50},
    ballPosition4: { x : 0, y : 50},
    ballPosition5: { x : 0, y : 50},
    ballPosition6: { x : 0, y : 50},

    backgroundMusic : undefined,

    ballOrigin : {x : 0, y : 0}
}


Game.update = () => {
    let d = new Date()
    // let currentSystemTime = d.getTime()
    Game.ballPosition1.x = d.getTime() % Game.canvas.width;
    Game.ballPosition2.x = (d.getTime() + 100) % Game.canvas.width;
    Game.ballPosition3.x = (d.getTime() +  200) % Game.canvas.width;
    Game.ballPosition4.x = (d.getTime() +  50) % Game.canvas.width;
    Game.ballPosition5.x = (d.getTime() +  120) % Game.canvas.width;
    Game.ballPosition6.x = (d.getTime() +  10) % Game.canvas.width;
}

Game.clearCanvas = () => {
    Game.canvasContext.clearBall(0,0, Game.canvas.width, Game.canvas.height)
}

let handleMouseMove = (evt) => {
    Game.ballPosition = { x : evt.pageX, y : evt.pageY}
}


Game.drawImage = (sprite, position, origin) => {
    Game.canvasContext.save();
    Game.canvasContext.translate(position.x, position.y)
    Game.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height,
        0,0, sprite.width, sprite.height)
    Game.canvasContext.restore();
}



Game.draw = (i) => {
    Game.drawImage(Game.backgroundSprite, { x : 0, y : 0})
    // Game.drawImage(Game.ballSprite, Game.ballPosition)
    // Game.drawImage(Game.ballSprite, Game.ballPosition2)
    // Game.drawImage(Game.ballSprite, Game.ballPosition3)
    // Game.drawImage(Game.ballSprite, Game.ballPosition4)
    // Game.drawImage(Game.ballSprite, Game.ballPosition5)
    // Game.drawImage(Game.ballSprite, Game.ballPosition6)

    Game.ballOrigin = {
        x : Game.ballSprite.width / 2,
        y : Game.ballSprite.height 
    }

    Game.drawImage(Game.ballSprite, Game.mousePostion, Game.ballOrigin)

    // Game.drawImage(Game.ballSprite, {x:30, y: 360})
    // Game.drawImage(Game.ballSprite, {x:50, y: 80})
    // Game.drawImage(Game.ballSprite, {x:100, y: 300})
    // Game.drawImage(Game.ballSprite, {x:180, y: 330})
}

Game.mainLoop = () => {
   console.log("hit mainloop#######################")
    Game.update()
    Game.draw()
}

Game.start = () => {
    Game.canvas = document.getElementById("myCanvas");
    Game.canvasContext = Game.canvas.getContext('2d');
    Game.ballSprite = new Image();
    Game.backgroundSprite = new Image()
    Game.backgroundSprite.src = "./sprites/background-800x480.png"
    Game.ballSprite.src = "./sprites/blue-small.png"
    Game.backgroundMusic = new Audio()
    Game.backgroundMusic.src = "Meydan-Elk.mp3"
    Game.backgroundMusic.play()
    Game.backgroundMusic.volume = 0.4

    // waits half a second for sprite to load.Not a loop                        
    // window.setTimeout(Game.mainLoop, 500);

    // original code called for setTimeout()
    window.setInterval(Game.mainLoop, 1000 / 60)
}

document.addEventListener('DOMContentLoaded', Game.start)                         
document.onmousemove = handleMouseMove

 
