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
        this.rat = []
        this.score = 0
        this.killedAnimals = 0
        // this.backgroundSound
    }

    preload() {

        this.backgroundImage = loadImage("media/bg1.jpeg")
        this.playerImage = loadImage("media/cupido1.png")
        this.heart = loadImage("media/heart1.png")
        this.spiderimg = loadImage("media/spider.png")
        this.chanclaImg = loadImage("media/chancla2.png")
        this.ratImg = loadImage("media/rat.png")
        this.oliver = loadImage("media/oliverMountain.jpeg")
        this.gameOver = loadImage("media/gameOver.webp")
        this.spiderReal = loadImage("media/spiderReal.jpeg")
        this.ratBit = loadImage("media/ratBit.jpeg")

        //! images Dogs
        this.dog1 = loadImage("media/1.png")
        this.dog2 = loadImage("media/2.png")
        this.dog3 = loadImage("media/3.png")
        this.dog4 = loadImage("media/4.png")
        this.dog5 = loadImage("media/5.png")
        this.dog6 = loadImage("media/6.png")
        this.dog7 = loadImage("media/7.png")
        this.dog8 = loadImage("media/8.png")

        // this.dogsImg = [this.dog1, this.dog2, this.dog3, this.dog4, this.dog5, this.dog6,this.dog7,this.dog8] 
        this.dogsImg2 = [this.dog3, this.dog4, this.dog5];
    }

    draw() {
        clear()
        this.background.draw()
        this.player.draw()

        //! music 
        backgroundSound.play()

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
        if (frameCount % 100 === 0) {
            this.spiders.push(new Spiders(this.spiderimg[Math.floor(Math.random() * 6)]))
        }

        //! create rat
        this.rat.forEach(rata => {
            rata.draw()
            image(this.ratImg, rata.x, rata.y, rata.width, rata.height)
        })
        if (frameCount % 100 === 0) {
            this.rat.push(new Rat(this.ratImg[Math.floor(Math.random() * 6)]))
        }


        //! dogs from the side
        if (frameCount % 150 === 0) {
            this.dogs.push(new Pets(this.dogsImg2[Math.floor(Math.random() * 3)]))
        }
        this.dogs.forEach(dog => {
            dog.draw()
        })


        //! boolet collision with the dog
        for (let i = 0; i < this.bullets.length; i++) {
            this.dogs = this.dogs.filter(oliver => {
                if (oliver.collision(this.bullets[i]) || oliver.x < -oliver.width) {
                    catchOlverSound.play()

                    this.score += 100
                    document.querySelector("h3 span").innerHTML = this.score
                    return false
                } else {
                    return true
                }
            })
        }

        //! chancla collision with the spider
        for (let i = 0; i < this.chancla.length; i++) {
            this.spiders = this.spiders.filter(spider => {
                if (spider.collision(this.chancla[i]) || spider.x < -spider.width) {
                    splashSound.play()

                    this.killedAnimals += 1
                    document.querySelector(".killed").innerHTML = this.killedAnimals
                    return false
                } else {
                    return true
                }
            })
        }

        //! chancla collision with the rat
        for (let i = 0; i < this.chancla.length; i++) {
            this.rat = this.rat.filter(rata => {
                if (rata.collision(this.chancla[i]) || rata.x < rata.width) {
                    splashSound.play()

                    this.killedAnimals += 1
                    document.querySelector(".killed").innerHTML = this.killedAnimals
                    return false
                } else {
                    return true
                }
            })
        }



        //! spider collision with the dog
        for (let i = 0; i < this.spiders.length; i++) {
            this.dogs = this.dogs.filter(oliver => {
                if (oliver.collision(this.spiders[i]) || oliver.x < -oliver.width) {
                    OliverScreamSound.play()
                    image(this.gameOver, 100, 100, 1200, 500) //350, 150, 650, 350
                    textSize(80)
                    textFont('cursive')
                    text("You scared Oliver 😭", 330, 170)
                    noLoop()
                    return false
                } else {
                    return true
                }
            })
        }
        //! rat collision with the dog
        for (let i = 0; i < this.rat.length; i++) {
            this.dogs = this.dogs.filter(oliver => {
                if (oliver.collision(this.rat[i]) || oliver.x < -oliver.width) {
                    OliverScreamSound.play()
                    image(this.gameOver, 350, 150, 650, 350)
                    textSize(80)
                    textFont('cursive')
                    text("You scared Oliver 😭", 300, 100)
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
                image(this.spiderReal, 400, 150, 650, 350)
                textSize(50)
                textFont('cursive')
                text("The spider bit you, you couldn't save Oliver 😭", 250, 100)
                backgroundSound.stop()
                noLoop()
                
                // backgroundSound.stop()
                return false
            } else {
                return true
            }
        })
        //! rat collision with the player
        this.rat = this.rat.filter(rata => {
            if (rata.collision(this.player) || rata.x < -rata.width) {
             
                image(this.ratBit, 400, 150, 650, 350)
                textSize(50)
                textFont('cursive')
                text("The Rat bit you, you couldn't save Oliver 😭", 250, 100)
                noLoop()

                return false
            } else {
                return true
            }
        })





        //! score win
        if (this.score >= 1000) {
            image(this.oliver, 350, 150, 800, 450)
            winn.play() 
            textSize(60)
            textFont('cursive')
            text("You saved Oliver, he is very happy with you!! 🤗", 200, 100)
            noLoop()
        }


    }

    //! shoot bullets
    shootHeart() {
        this.bullets.push(new Bullet(this.player.x + 60, this.player.y + 20))
        shootSound2.play()
    }
    shootChancla() {
        this.chancla.push(new Chancla(this.player.x + 60, this.player.y + 20))
        shootSound.play()
    }

}
