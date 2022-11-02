

class Bullet {
    constructor(x, y) {
        this.width = 40
        this.height = 40
        this.velocity = 8
        this.x = x
        this.y = y
    }
    draw() {
        this.x += this.velocity

    }
    // collision(element) {
    //     let bulletX = this.x + this.width
    //     let bulletY = this.y + this.height

    //     let dogX = element.x + element.width
    //     let dogY = element.y + element.height

    //     if (dist(bulletX, bulletY, dogX, dogY) > this.width) {
    //         return false
    //     } else {
    //         // bullets.score += 100
    //         // document.querySelector("h3 span").innerText = bullets.score
    //         return true
    //     }
    // }

}













    // collision(playerInfo) {
    //     let obstacleX = this.x + this.width / 2
    //     let obstacleY = this.y + this.height / 2

    //     let playerX = playerInfo.x + playerInfo.width / 2
    //     let playerY = playerInfo.y + playerInfo.height / 2

    //     if (dist(obstacleX, obstacleY, playerX, playerY) > this.width / 2) {
    //         return false
    //     } else {
    //         playerInfo.score += 100
    //         document.querySelector("h2 span").innerText = playerInfo.score
    //         return true
    //     }
    // }