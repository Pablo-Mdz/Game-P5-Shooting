class Game {
    constructor() {
        this.playerImage
        this.backgroundImage
        this.background = new Background()
        this.player = new Player()
        this.bullets = []
        this.chancla = []
        this.spiders = []
        this.dogs = []
        this.score = 0
        this.rat = []
    }
    
    preload() {
       
        this.backgroundImage = loadImage("../pictures/bgnight.jpeg")
        this.playerImage = loadImage("../pictures/cupido1.png")
        this.heart = loadImage("../pictures/heart1.png")
        this.spiderimg = loadImage("../pictures/spider.png")
        this.chanclaImg = loadImage("../pictures/chancla2.png")
        this.ratImg = loadImage("../pictures/rat.png")

        //! images Dogs
        this.dog1 = loadImage("../pictures/1.png")
        this.dog2 = loadImage("../pictures/2.png")
        this.dog3 = loadImage("../pictures/3.png")
        this.dog4 = loadImage("../pictures/4.png")
        this.dog5 = loadImage("../pictures/5.png")
        this.dog6 = loadImage("../pictures/6.png")
        this.dog7 = loadImage("../pictures/7.png")
        this.dog8 = loadImage("../pictures/8.png")
        
        this.dogsImg = [this.dog1, this.dog2, this.dog3, this.dog4, this.dog5, this.dog6,this.dog7,this.dog8] 

    }

    draw() {
        clear()
        this.background.draw()
        this.player.draw()

        //! music 
        // backgroundSound.play()

        //! create bullet
        this.bullets.forEach(bullet => {
            bullet.draw()
            image(this.heart, bullet.x, bullet.y, bullet.width, bullet.height)
        })
        //! create chancla
        this.chancla.forEach(ojota => {
            ojota.draw()
            image(this.chanclaImg, ojota.x, ojota.y, ojota.width, ojota.height)
        })


        //! create spiders
        this.spiders.forEach(spider => {
            spider.draw()
            image(this.spiderimg, spider.x, spider.y, spider.width, spider.height)
        })
        if (frameCount % 250 === 0) {
            this.spiders.push(new Spiders(this.spiderimg[Math.floor(Math.random() * 6)]))
        }
        //! create rat
        this.rat.forEach(rata => {
            rata.draw()
            image(this.ratImg, rata.x, rata.y, rata.width, rata.height)
        })
    
        if (frameCount % 200 === 0) {
            this.rat.push(new Rat(this.ratImg[Math.floor(Math.random() * 6)]))
        }


        //! dogs from the side
        if (frameCount % 140 === 0) {
            this.dogs.push(new Pets(this.dogsImg[Math.floor(Math.random() * 8)]))
        }
        this.dogs.forEach(dog => {
            dog.draw()
        })
       

        //! boolet collision with the dog
         for ( let i=0; i < this.bullets.length; i++ ) {
            this.dogs = this.dogs.filter(oliver => { 
                if (oliver.collision(this.bullets[i]) || oliver.x < -oliver.width) {
                            this.score += 100
                            document.querySelector("h3 span").innerHTML = this.score //  += 100
                            return false
                        } else {
                            return true
                        }
                    })
                }

        //! chancla collision with the spider
         for ( let i=0; i < this.chancla.length; i++ ) {
            this.spiders = this.spiders.filter(spider => { 
                if (spider.collision(this.chancla[i]) || spider.x < -spider.width) {
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
                    textSize(100)
                    text("You lost!!!!!! :D", 600, 300)
                    noLoop()
                            return false
                        } else {
                            return true
                        }
                    })
                }

        //! rat collision with the dog
         for ( let i=0; i < this.rat.length; i++ ) {
            this.dogs = this.dogs.filter(oliver => { 
                if (oliver.collision(this.rat[i]) || oliver.x < -oliver.width) {
                    textSize(100)
                    text("You lost!!!!!! :D", 600, 300)
                    noLoop()
                            return false
                        } else {
                            return true
                        }
                    })
                }
        //! spider collision with the player
        this.spiders = this.spiders.filter(spider => {
            if (spider.collision(this.player) || spider.x < -spider.width) {
                textSize(100)
            text("You LOST!!!!!! :D", 600, 300)
            noLoop()
                return false
            } else {
                return true
            }
        })
                

       


          //! score win
        if (this.score >= 1000) {
            textSize(32)
            text("You won!!!!!! :D", 100, 100)
            noLoop()
        }
    

    }

   //! shoot bullets
   shootHeart() {
       this.bullets.push(new Bullet(this.player.x + 60 , this.player.y + 20))
    }
   shootChancla() {
       this.chancla.push(new Chancla(this.player.x + 60 , this.player.y + 20))
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