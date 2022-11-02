class Background {
    constructor() {
        this.backgroundImage
        this.y = 0
        this.x = 0
        this.height = 600
        this.width = 1400
    }
    draw() {
        image ( game.backgroundImage,this.x, this.y, this.width, this.height)
        image ( game.backgroundImage,this.x + 1400, this.y, this.width, this.height)

        this.x -= 7
        if(this.x <  -1400) this.x = 0
        // Image(game.backgroundImage.forEach(function (img) {
        //     img.x -= img.speed
        //     image(img.src, img.x, 0, width, height)
        //     image(img.src, img.x + width, 0, width, height)

        //     if (img.x <= -width) img.x = 0
        // }))
    }

    //math.floor for the images in a array
}
