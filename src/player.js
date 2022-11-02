class Player {
    constructor() {
        this.width = 80
        this.height = 70
        this.x = 50
        this.y = 300
        this.score = 0
    }
    draw() {
        if (this.y >= height - this.height) this.y = height - this.height
        image(game.playerImage, this.x, this.y, this.width, this.height)
    }
    
    moveUp() {
        if (this.y >= 30) {
            this.y -= 50
        }
    }
    moveDown() {
        if (this.y <= 1200) {
            this.y += 50 //10 go slow
        }
    }
    moveLeft() {
        if (this.x >= 30) {
            this.x -= 50
        }
    }

    moveRight() {
        if (this.x <= 600) {
            this.x += 50 //10 go slow
        }
    }  
}