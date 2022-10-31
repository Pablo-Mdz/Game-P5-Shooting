class Game {
    constructor(){
        this.playerImage
        this.backgroundImage
        this.background = new Background()
        this.player = new Player()
    }
    preload()  {
        this.backgroundImage = loadImage("../pictures/dragon-blue.png")
        this.playerImage = loadImage("../pictures/character-down.png")
        
    }
    draw() {   
        clear()
        this.background.draw()
        this.player.draw()
    }
    }
