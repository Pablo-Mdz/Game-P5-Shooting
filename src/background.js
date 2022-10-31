class Background {
    constructor() {
        this.backgroundImage
        this.y = 0
        this.x = 0
        this.height = 600
        this.width = 1000
    }
    draw(){
        image ( game.backgroundImage,  this.x, this.y, this.width, this.height)
    }
}
