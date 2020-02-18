function Snake() {
    this.x = 0;
    this.y = 0;
    this.xPos = unit;
    this.yPos = 0;
    this.body = [];
    this.count = 0;
    this.collide = false;

    this.show = () => {
        context.fillStyle = "#1bf41f"; //Green
        for (let i = 0; i < this.body.length; i++) {
            context.fillRect(this.body[i].x, this.body[i].y, unit, unit);
        }
        context.fillRect(this.x, this.y, unit, unit);
    }

    this.update = () => {
        //Body update
        let limit = this.body.length - 1;
        for (let i = 0; i < limit; i++) {
            this.body[i] = this.body[i + 1];
        }
        this.body[this.count - 1] = { x: this.x, y: this.y }; //Last position

        this.x += this.xPos;
        this.y += this.yPos;

        /** COLLISIONS */
        //Upper limmits
        if (this.x > canvas.width) {
            this.x = 0;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        }
        //Lower limmits
        if (this.x < 0) {
            this.x = canvas.width - unit;
        }
        if (this.y < 0) {
            this.y = canvas.height - unit;
        }

        if ( this.count >0 ){
            if (this.body[this.count-1].x > canvas.width
                || this.body[this.count-1].x < 0
                || this.body[this.count-1].y < 0
                || this.body[this.count-1].y > canvas.height) {
                this.collide = true;
                console.log('Collision!');
                
            }
        }  
    };

    this.move = (dir, unlock) => {
        switch (dir) {
            case 'Up':
                if (this.current != 'Down' || unlock) {     //Opposite direction blocking
                    this.xPos = 0;
                    this.yPos = -unit;
                    this.current = dir;
                }
                break;
            case 'Down':
                if (this.current != 'Up' || unlock) {
                    this.xPos = 0;
                    this.yPos = unit;
                    this.current = dir;
                }
                break;
            case 'Right':
                if (this.current != 'Left' || unlock) {
                    this.xPos = unit;
                    this.yPos = 0;
                    this.current = dir;
                }
                break;
            case 'Left':
                if (this.current != 'Right' || unlock) {
                    this.xPos = -unit;
                    this.yPos = 0;
                    this.current = dir;
                }
                break;
        }
    };

    this.eats = (food) => {
        if (this.x === food.x && this.y === food.y) return true;
    };

    this.changedir = ()=>{
        switch (this.current) {
            case 'Up': this.move('Down', true);
                break;
            case 'Down': this.move('Up', true);
                break;
            case 'Right': this.move('Left', true);
                break;
            case 'Left': this.move('Right', true);
                break;
        }
    };
    
};
