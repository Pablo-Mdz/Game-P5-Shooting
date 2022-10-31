class Player {
    constructor() {
        this.width = 50
        this.height = 70
        this.x = 0
        this.y = 0
        this.velocity = 1
        this.gravity = 0.2

    }
    draw() {

        // this.velocity += this.gravity
        // this.y += this.velocity
        if (this.y >= height - this.height) this.y = height - this.height
        image(game.playerImage, this.x, this.y, this.width, this.height)

    }
    move() {
        // this.velocity = -15
    }
    moveUp() {
        if (this.y >= 30) {
            this.y -= 30
        }
    }
    moveDown() {
        if (this.y <= 1000) {
            this.y += 30 //10 go slow
        }
    }
    moveLeft() {
        if (this.x >= 30) {
            this.x -= 30
        }
    }

    moveRight() {
        if (this.x <= 900) {
            this.x += 30 //10 go slow
        }
    }
}