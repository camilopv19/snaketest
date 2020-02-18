const getRandom = (num) => {
    return Math.floor(Math.random() * num - 1) + 1; //  Min value should not be 0
};

function Food() {
    this.x;
    this.y;

    this.position = () => {
        this.x = getRandom(rows) * unit;
        this.y = getRandom(cols) * unit;
    };

    this.place = () => {
        context.fillStyle = 'red';
        context.fillRect(this.x, this.y, unit, unit);
    }
}

