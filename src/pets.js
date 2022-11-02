class Pets {
    constructor(image) {
        this.image = image
        this.x = width
        this.y = (Math.random() * height / 2)
        this.width = 100
        this.height = 80

        this.counterDisplay = document.querySelector("h3 span");

    }

    draw() {

        //! draw dogs
        this.x--
        image(this.image, this.x, this.y, this.width, this.height)

    }

    //! collision bullets with dogs
    collision(element) {


        let dogX = this.x + this.width
        let dogY = this.y + this.height

        let bulletX = element.x + element.width
        let bulletY = element.y + element.height

        if (dist(dogX, dogY, bulletX, bulletY) > this.width) {
            return false
        } else {

            return true
        }
    }
}











