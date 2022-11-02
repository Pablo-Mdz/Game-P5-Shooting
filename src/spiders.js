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

}








// collision(playerInfo) {
//     let obstacleX = this.x + this.width 
//     let obstacleY = this.y + this.height 

//     let playerX = playerInfo.x + playerInfo.width 
//     let playerY = playerInfo.y + playerInfo.height 

//     if (dist(obstacleX, obstacleY, playerX, playerY) > this.width ) {
//         return false
//     } else {
//         playerInfo.score += 100
//         document.querySelector("h3 span").innerText = playerInfo.score
//         return true
//     }
// }