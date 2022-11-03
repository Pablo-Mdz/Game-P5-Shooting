//! start the game
const game = new Game()


function preload() {
    game.preload()
   

}
function setup() {
    createCanvas(1400, 600)
}

function draw() {
    game.draw()
}

function keyPressed() {

    //! move player
    
    if (keyCode === 39) {
        game.player.moveRight()
    }

    if (keyCode === 40) {
        game.player.moveDown()
    }
    if (keyCode === 37) {
        game.player.moveLeft()
    }

    if (keyCode === 38) {
        game.player.moveUp()
    }

    //! shooting
    if (keyCode === 32) {
        game.shootHeart()
    }
    if (keyCode === 83) {
        game.shootChancla()
    }
    if(keyCode === 32) {
        game.pause()
    }
}