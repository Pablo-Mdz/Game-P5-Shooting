class Spiders {
    constructor() {
        this.x = (Math.random() * width)
        this.y = 0
        this.width = 40
        this.height = 50
        // this.velocity = 3
    }

    draw() {
        this.y++
        image(game.spiderimg, this.x, this.y, this.width, this.height)
    }


    //!collision spider and dog
    collision(dog) {
        let spiderX = this.x + this.width
        let spiderY = this.y + this.height

        let dogX = dog.x + dog.width
        let dogY = dog.y + dog.height

        if (dist(spiderX, spiderY, dogX, dogY) > this.width) {
            return false
        } else {
            
            return true
        }
    }
}



//! class rat
class Rat {
    constructor() {
        this.x = (Math.random() * width)
        this.y = 600
        this.width = 55
        this.height = 30
        // this.velocity = 3
    }

    draw() {
        this.y--
        image(game.ratImg, this.x, this.y, this.width, this.height)
    }


    //!collision spider and dog
    collision(dog) {
        let ratX = this.x + this.width
        let ratY = this.y + this.height

        let dogX = dog.x + dog.width
        let dogY = dog.y + dog.height

        if (dist(ratX, ratY, dogX, dogY) > this.width) {
            return false
        } else {
            
            return true
        }
    }
}







