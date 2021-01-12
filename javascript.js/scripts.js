// alert("game");


var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;

//save the cell width in a variable for easy control
var cw = 16;
var d;
var food;
var score;

// create the snake 
var snake_array; //array of cells to make up the snake

function init()
{
    d = "right"; //default direction
    create_snake();
    create_food(); 
    //display the score
    score = 0;
    window.onkeydown = keyEvent;
    
    //move the snake using a timer which will trigger the paint function
    //every 90ms
    if(typeof game_loop != "undefined") clearInterval(game_loop);
    game_loop = setInterval(paint, 150);
}
init();

function create_snake()
{
    var length = 5; //Length of the snake
    snake_array = []; //Empty array to start with
    for(var i = length-1; i>=0; i--)
    {
        //This will create a horizontal snake starting from the top left
        snake_array.push({x: i, y:0});
    }
}

// create the food 
function create_food()
{
    food = {
        x: Math.round(Math.random()*(w-cw)/cw), 
        y: Math.round(Math.random()*(h-cw)/cw), 
    };
    
}

// paint the snake 
function paint()
{
    
    // paint the canvas 
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, w, h);
    
    //movement for the snake
    var nx = snake_array[0].x;
    var ny = snake_array[0].y;
    
    if(d == "right") nx++;
    else if(d == "left") nx--;
    else if(d == "up") ny--;
    else if(d == "down") ny++;
    
    //game over clauses 
    //body collision
    if(nx == -1 || nx == w/cw || ny == -1 || ny == h/cw || check_collision(nx, ny, snake_array))
    {
        //restart game
        init();
       
        return;
    }
    
    //If the new head position matches with that of the food,
    //Create a new head instead of moving the tail
    if(nx == food.x && ny == food.y)
    {
        var tail = {x: nx, y: ny};
        score++;
        //Create new food
        create_food();
    }
    else
    {
        var tail = snake_array.pop(); //pops out the last cell
        tail.x = nx; tail.y = ny;
    }
    // snake can now eat the food.
    
    snake_array.unshift(tail); //puts back the tail as the first cell
    
    for(var i = 0; i < snake_array.length; i++)
    {
        var c = snake_array[i];
        
        paint_cell(c.x, c.y);
    }
    
    //Lets paint the food
    paint_cell(food.x, food.y);
    //Lets paint the score
    var score_text = "Score: " + score;
    ctx.fillText(score_text, 10, 540);
}

//create a generic function to paint cells
function paint_cell(x, y)
{
    ctx.fillStyle = "blue";
    ctx.fillRect(x*cw, y*cw, cw, cw);
    ctx.strokeStyle = "white";
    ctx.strokeRect(x*cw, y*cw, cw, cw);
}

function check_collision(x, y, array)
{
    //This function will check if the provided x/y coordinates exist
    //in an array of cells or not
    for(var i = 0; i < array.length; i++)
    {
        if(array[i].x == x && array[i].y == y)
         return true;
    }
    return false;
}

//Lets add the keyboard controls now
function keyEvent(e){
    var key = e.which;
    
    if(key == "37" && d != "right") d = "left";
    else if(key == "38" && d != "down") d = "up";
    else if(key == "39" && d != "left") d = "right";
    else if(key == "40" && d != "up") d = "down";
    
}
// alert("game");


var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;

//save the cell width in a variable for easy control
var cw = 16;
var d;
var food;
var score;

// create the snake 
var snake_array; //array of cells to make up the snake

function init()
{
    d = "right"; //default direction
    create_snake();
    create_food(); 
    //display the score
    score = 0;
    window.onkeydown = keyEvent;
    
    //move the snake using a timer which will trigger the paint function
    //every 90ms
    if(typeof game_loop != "undefined") clearInterval(game_loop);
    game_loop = setInterval(paint, 150);
}
init();

function create_snake()
{
    var length = 5; //Length of the snake
    snake_array = []; //Empty array to start with
    for(var i = length-1; i>=0; i--)
    {
        //This will create a horizontal snake starting from the top left
        snake_array.push({x: i, y:0});
    }
}

// create the food 
function create_food()
{
    food = {
        x: Math.round(Math.random()*(w-cw)/cw), 
        y: Math.round(Math.random()*(h-cw)/cw), 
    };
    
}

// paint the snake 
function paint()
{
    
    // paint the canvas 
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, w, h);
    
    //movement for the snake
    var nx = snake_array[0].x;
    var ny = snake_array[0].y;
    
    if(d == "right") nx++;
    else if(d == "left") nx--;
    else if(d == "up") ny--;
    else if(d == "down") ny++;
    
    //game over clauses 
    //body collision
    if(nx == -1 || nx == w/cw || ny == -1 || ny == h/cw || check_collision(nx, ny, snake_array))
    {
        //restart game
        init();
       
        return;
    }
    
    //If the new head position matches with that of the food,
    //Create a new head instead of moving the tail
    if(nx == food.x && ny == food.y)
    {
        var tail = {x: nx, y: ny};
        score++;
        //Create new food
        create_food();
    }
    else
    {
        var tail = snake_array.pop(); //pops out the last cell
        tail.x = nx; tail.y = ny;
    }
    // snake can now eat the food.
    
    snake_array.unshift(tail); //puts back the tail as the first cell
    
    for(var i = 0; i < snake_array.length; i++)
    {
        var c = snake_array[i];
        
        paint_cell(c.x, c.y);
    }
    
    //Lets paint the food
    paint_cell(food.x, food.y);
    //Lets paint the score
    var score_text = "Score: " + score;
    ctx.fillText(score_text, 10, 540);
}

//create a generic function to paint cells
function paint_cell(x, y)
{
    ctx.fillStyle = "blue";
    ctx.fillRect(x*cw, y*cw, cw, cw);
    ctx.strokeStyle = "white";
    ctx.strokeRect(x*cw, y*cw, cw, cw);
}

function check_collision(x, y, array)
{
    //This function will check if the provided x/y coordinates exist
    //in an array of cells or not
    for(var i = 0; i < array.length; i++)
    {
        if(array[i].x == x && array[i].y == y)
         return true;
    }
    return false;
}

//Lets add the keyboard controls now
function keyEvent(e){
    var key = e.which;
    
    if(key == "37" && d != "right") d = "left";
    else if(key == "38" && d != "down") d = "up";
    else if(key == "39" && d != "left") d = "right";
    else if(key == "40" && d != "up") d = "down";
    
}
// var mySound;
// var mySound=new sound ("bounce.mp3");
// function mySound() {
//     mySound= new sound ("bounce.mp3");
// }
