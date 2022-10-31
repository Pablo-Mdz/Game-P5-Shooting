

class Gun {
    constructor(x,y) {
        this.width = 50
        this.height = 70
        this.velocity = 9
        this.x = x
        this.y = y
        
    }
 
    draw() {

        this.x += this.velocity
        
    }


}

