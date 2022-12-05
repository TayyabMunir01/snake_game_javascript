const canva = document.getElementById('canva')
const scoreboard = document.getElementById('score')
const context = canva.getContext('2d')

const width = canva.width = 400;
const height = canva.height = 400;
const sheight = height/25
const swidth = width/25

function createGridLines(){
    let line = 0;
    for(let i=0; i<25; i++){
        context.fillStyle = '#0E3F89'
        context.fillRect(line,0,1,height)
        context.fillRect(0,line,width,1)
        line+=16;
    }    
}
// createGridLines()

context.fillRect(0,0,swidth,sheight)

let cursor = {
    x:0,
    y:0
}
let speed=75;


let keytracker;


let interval;

function pointTracker(key){
    clearInterval(interval)
    keytracker = key
    interval = setInterval(function(){
    if(keytracker=="right"){
        snakeBodyIncreaser()
        drawMultipleBoxes()
        cursorIncrement('left')
        drawOneBox("left")
        detector("left")
        collisiondetector()
        }
    if(keytracker=="left"){
        snakeBodyIncreaser()
        drawMultipleBoxes()
        cursorIncrement('right')
        drawOneBox("right")
        detector("right")
        collisiondetector()
        }
    if(keytracker=="up"){
        snakeBodyIncreaser()
        drawMultipleBoxes()
        cursorIncrement('down')
        drawOneBox("down")
        detector("down")
        collisiondetector()
        }
    if(keytracker=="down"){
        snakeBodyIncreaser()
        drawMultipleBoxes()
        cursorIncrement('up')
        drawOneBox("up")
        detector("up")
        collisiondetector()
        }
        // console.log('loopiing')
    },speed)
}

window.addEventListener("keydown",eventF)


let count = 0;

function eventF(e){
    console.log(e.key)
    if(e.key=="ArrowRight"){
        cursorRunner('right')
        }
    if(e.key=="ArrowLeft"){
        cursorRunner('left')
        }
    if(e.key=="ArrowUp"){
        cursorRunner('up')
        }
    if(e.key=="ArrowDown"){
        cursorRunner('down')
        }
    if(e.key=="Escape"){
        clearInterval(interval)
    }
}


function cursorRunner(key){
    state(key)
    if(statefinder[1]==key && count==0){
        pointTracker(key);
    }
}

function cursorIncrement(key){
    if(statefinder[0]!=key){
        switch (key){
            case 'left':
                cursor.x+=16;
                break;
            case 'right':
                cursor.x-=16;
                break;
            case 'down':
                cursor.y-=16;
                break;
            case 'up':
                cursor.y+=16;
                break;
            default:
                break;            
        }
    // console.log(cursor.x,cursor.y)
}
    else{keytracker=key}
}


let statefinder = [];
function state(key){
    if(statefinder.length<2){
        statefinder[1]=key
    }
    else{
        if(statefinder[1]!=key){
            count=0;
            statefinder[0]=statefinder[1]
            statefinder.pop()
            statefinder.push(key)
        }
        else{count++;}
    }
    console.log(statefinder)
}

function drawOneBox(key){
    context.fillStyle = 'red'
    switch (key){
        case 'right':
            context.clearRect(cursor.x+16,cursor.y,swidth,sheight)
            break;
        case 'left':
            context.clearRect(cursor.x-16,cursor.y,swidth,sheight)
            break;
        case 'up':
            context.clearRect(cursor.x,cursor.y-16,swidth,sheight)
            break;
        case 'down':
            context.clearRect(cursor.x,cursor.y+16,swidth,sheight)
            break;
    }   
    context.fillRect(cursor.x,cursor.y,swidth,sheight)
}


let randomBoxCoord = {
    x:0,
    y:0
}

function randomBox(){
    randomBoxCoord.x = Math.floor(Math.random()*400)
    randomBoxCoord.y = Math.floor(Math.random()*400)

    console.log(randomBoxCoord.x,randomBoxCoord.y)

    for (let i=0; i<16; i++){
        if(randomBoxCoord.x%16==i){
            randomBoxCoord.x-=i;
        }
        if(randomBoxCoord.y%16==i){
            randomBoxCoord.y-=i;
        }
    }
    console.log(randomBoxCoord.x,randomBoxCoord.y)
}

let score=-1;

function drawRandomBox(){
    randomBox()
    context.fillStyle = 'green'
    context.fillRect(randomBoxCoord.x,randomBoxCoord.y,swidth,sheight)
    score++;
    scoreboard.innerText = `Score: ${score}`;
}
drawRandomBox()


function detector(key){
    if(cursor.x==randomBoxCoord.x && cursor.y==randomBoxCoord.y){
        drawRandomBox()
        incrementBox()
    }
}

function resetRandomBox(){
    randomBox()
    context.fillStyle = 'green'
    context.fillRect(randomBoxCoord.x,randomBoxCoord.y,swidth,sheight)
    score=0;
    scoreboard.innerText = `Score: ${score}`;
}

function collisiondetector(){
    if(cursor.x<0 || cursor.x>384 || cursor.y<0 || cursor.y>384){
        clearInterval(interval)
        cursor.x=0
        cursor.y=0
        // context.clearRect(randomBoxCoord.x,randomBoxCoord.y,swidth,sheight)
        context.clearRect(0,0,width,height)
        // createGridLines()
        // drawRandomBox()
        resetRandomBox()
        statefinder = []
        context.fillStyle = '#0E3F89'
        context.fillRect(0,0,swidth,sheight)
        count=0
        boxes=[]
    }
}

let boxes = [];

function incrementBox(){
        boxes.push(new NewBox(cursor.x,cursor.y))
        console.log(boxes)
}




function NewBox(x,y){
    this.x = x
    this.y = y
}




function snakeBodyIncreaser(){
    for(let i=boxes.length-1; i>0; i--){
        boxes[i].x=boxes[i-1].x
        boxes[i].y=boxes[i-1].y
    }
    if(boxes.length){
        boxes[0].x=cursor.x
        boxes[0].y=cursor.y
    }

}

function drawMultipleBoxes(){
    if(boxes.length){
        context.fillStyle = 'yellow'
        boxes.map(function(current,index){
            context.fillRect(boxes[index].x,boxes[index].y,16,16)
        })
        context.clearRect(boxes[boxes.length-1].x,boxes[boxes.length-1].y,16,16)
        console.log(boxes[0])
    }
}
