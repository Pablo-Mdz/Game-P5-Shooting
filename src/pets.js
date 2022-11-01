class Pets {
    constructor(image) {
        this.image = image
        this.x = width
        this.y = (Math.random() * height)
        this.width = 80
        this.height = 180
    }

    draw() {
        this.x--
        image(this.image, this.x, this.y, this.width, this.height)

    }

    collision(bullets) {
        let bulletX = this.x + this.width
        let bulletY = this.y + this.height

        // let dogX = game.dogs.x + game.dogs.width 
        // let dogY = game.dogs.y + dogs.height 
        for (let bullet of bullets) {
            console.log(dist(this.x, this.y, bullet.x, bullet.y))

            if (dist(this.x, this.y, bullet.x, bullet.y) < 50) {
                console.log('removed')
                return true
            } else {
                //      game.dogs.score += 100
                //      document.querySelector("h3 span").innerText = dogs.score
                return false
            }
        }


    }
}






    // collision(bulletInfo) {
    //     let dogX = this.x + this.width
    //     let dogY = this.y + this.height

    //     let bulletX = bulletInfo.x + bulletInfo.width
    //     let bulletY = bulletInfo.y + bulletInfo.height

    //     if (dist(dogX, dogY, bulletX, bulletY) > this.width ) {
    //         return false
    //     } else {
    //         bulletInfo.score += 100
    //         document.querySelector("h3 span").innerText = bulletInfo.score
    //         return true
    //     }
    // }
