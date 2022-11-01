const game = new Game()

function preload() {
    game.preload()

}

function setup() {
    createCanvas(1200, 600)
}

function draw() {
    game.draw()
}

function keyPressed() {

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
    //shooting
    if (keyCode === 32) {
        game.shoot()
    }
}