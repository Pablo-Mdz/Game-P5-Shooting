

class Gun {
    constructor(x, y) {
        this.width = 50
        this.height = 50
        this.velocity = 8
        this.x = x
        this.y = y
    }
    draw() {
        this.x += this.velocity
    }
}

