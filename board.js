const canvas = document.getElementById("cnv");
const context = canvas.getContext("2d");
let c = document.getElementById('counter');

unit = 16;
// size = 16x16 px
let rows = canvas.height / unit;
let cols = canvas.width / unit;
var snake, food;
var difficulty = 100;

// Start game with IIFE: (/* function */)()
const start = () => {
    snake = new Snake();
    food = new Food;

    food.position();

    window.setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        food.place();
        snake.update();
        snake.show();

        if (snake.eats(food)) {
            food.position();
            snake.count++;
            counter(snake.count);
        }

        if (snake.collide ) {
            // reduceArea();
            food.place();
            snake.changedir();
            snake.collide = false;
        }
        // else if (snake.collide && canvas.width <= 113){
        //     alert('End of game!');
        //     snake.collide = false;
        // }
    }, difficulty)
};

const direction = (event)=>{
    const dir = event.key.replace('Arrow', '');
    snake.move(dir, false);
}
const counter = (num)=>{
    c.innerHTML = num;
}
const reduceArea = ()=>{
    canvas.width -= 113;
    canvas.height -= 113;
    rows = canvas.height / unit;
    cols = canvas.width / unit;
};
document.addEventListener('keydown', direction);



