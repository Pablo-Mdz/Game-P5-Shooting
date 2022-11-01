class Game {
    constructor() {
        this.playerImage
        this.backgroundImage
        this.background = new Background()
        this.player = new Player()
        this.boolets = []
    }
    preload() {
        
    //     this.backgroundImage = [ 
    //         {src: loadImage("../pictures/bg-land.jpeg"), x: 0, speed: 2},
    //         {src: loadImage("../pictures/bg-land.jpeg"), x: 0, speed: 2}
    //  ]
        this.backgroundImage = loadImage("../pictures/bg-land.jpeg")
        this.playerImage = loadImage("../pictures/character-down.png")
        this.boolet1 = loadImage("../pictures/heart1.png")
    }
    draw() {
        clear()
        this.background.draw()
        this.player.draw()
        this.boolets.forEach(boolet => {
            boolet.draw()
            image(this.boolet1, boolet.x, boolet.y, boolet.width, boolet.height)
        })
    }
    shoot() {
        this.boolets.push(new Gun(this.player.x, this.player.y))
    }
}
