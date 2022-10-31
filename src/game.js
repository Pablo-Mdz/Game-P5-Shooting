class Game {
    constructor() {
        this.playerImage
        this.backgroundImage
        this.background = new Background()
        this.player = new Player()
        this.boolets = []
    }
    preload() {
        this.backgroundImage = loadImage("../pictures/plx-1.png")
        this.playerImage = loadImage("../pictures/character-down.png")
        this.shoot = loadImage("../pictures/tile000.png")

    }
    draw() {
        clear()
        this.background.draw()
        this.player.draw()
        this.boolets.forEach(boolet => {
            boolet.draw()
            image(this.shoot, boolet.x, boolet.y, boolet.width, boolet.height)
        })

    }
    b() {
        console.log('fff')
        this.boolets.push(new Gun(this.player.x, this.player.y))
    }
}
