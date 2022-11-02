class Game {
    constructor() {
        this.playerImage
        this.backgroundImage
        this.background = new Background()
        this.player = new Player()
        this.bullets = []
        this.spiders = []
        this.dogs = []
       

    }

    preload() {
        
        this.backgroundImage = loadImage("../pictures/bg-land.jpeg")
        this.playerImage = loadImage("../pictures/cupido1.png")
        this.heart = loadImage("../pictures/heart1.png")
        this.spiderimg = loadImage("../pictures/spider.png")

        //! images Dogs
        this.dog1 = loadImage("../pictures/dog1.png")
        this.dog2 = loadImage("../pictures/dog2.png")
        this.dog3 = loadImage("../pictures/dog3.png")
        this.dog4 = loadImage("../pictures/dog4.png")
        this.dog5 = loadImage("../pictures/dog5.png")
        this.dog6 = loadImage("../pictures/dog6.png")
        this.dog7 = loadImage("../pictures/dog7.png")
        this.dog8 = loadImage("../pictures/dog8.png")
        this.dog9 = loadImage("../pictures/dog9.png")
        this.dogsImg = [this.dog1, this.dog2, this.dog3, this.dog4, this.dog5, this.dog6,this.dog7,this.dog8,this.dog9] 

    }

    draw() {
        clear()
        this.background.draw()
        this.player.draw()


        //! create bullet
        this.bullets.forEach(bullet => {
            bullet.draw()
            image(this.heart, bullet.x, bullet.y, bullet.width, bullet.height)
        })


        //! create spiders
        this.spiders.forEach(spider => {
            spider.draw()
            image(this.spiderimg, spider.x, spider.y, spider.width, spider.height)
        })
        if (frameCount % 250 === 0) {
            this.spiders.push(new Spiders(this.spiderimg[Math.floor(Math.random() * 6)]))
        }


        //! dogs from the side
        if (frameCount % 140 === 0) {
            this.dogs.push(new Pets(this.dogsImg[Math.floor(Math.random() * 9)]))
        }
        this.dogs.forEach(dog => {
            dog.draw()
        })
       

        //! boolet collision with the dog
         for ( let i=0; i < this.bullets.length; i++ ) {
            this.dogs = this.dogs.filter(oliver => { 
                if (oliver.collision(this.bullets[i]) || oliver.x < -oliver.width) {
                            console.log("test apear")
                            return false
                        } else {
                            return true
                        }
                    })
                }

        //! spider collision with the dog
         for ( let i=0; i < this.spiders.length; i++ ) {
            this.dogs = this.dogs.filter(oliver => { 
                if (oliver.collision(this.spiders[i]) || oliver.x < -oliver.width) {
                            console.log("test apear")
                            return false
                        } else {
                            return true
                        }
                    })
                }


          //! score win
        if (this.bullets.score > 100) {
            textSize(32)
            text("You won!!!!!! :D", 100, 100)
            noLoop()
        }
    

    }

   //! shoot bullets
   shoot() {
       this.bullets.push(new Bullet(this.player.x + 60 , this.player.y + 20))
    }
    
}















    //to stop the game
//     this.obstacles.forEach(obstacle => {    
//         obstacle.draw()
//         if(obstacle.collision(this.plauyer)) {
//             noLoop() or obstacle.velocity = -5
                // textSize(32)                             cartel de win or lose
                // text('you won!!' , 300,300)
//         }
        
//     });
// if(!obstacle.collision(player)){
//     obstacle.x --
// }
    // if (frameCount % 100 === 0) {
    //     this.obstacles.push(new Obstacle(this.coinImage))
    // // }
    // if (frameCount % 100 === 0) {
    //     this.spider.push(new Spider(this.spiderimg))
    // }

    // this.spiders.forEach(spider => {
    //     spider.draw()
    // })



// sound with love
// aranas se caen al morir (girando