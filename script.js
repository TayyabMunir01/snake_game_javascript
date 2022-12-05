console.log("working")

const canva = document.getElementById("canva")
const context = canva.getContext("2d")

const height = canva.width = 400;
const width = canva.height = 400;


console.dir(canva,context)

let score = document.getElementById('score')
let scorecount = 0;

context.clearRect(0,0,width,height)
context.fillRect(0,0,width/25,height/25);

let x = 0;
let y = 0;

let dirs = {
    ArrowRight: false,
    ArrowLeft: false,
    ArrowUp: false,
    ArrowDown: false
}

let cts = {
    ArrowRight: 0,
    ArrowLeft: 0,
    ArrowUp: 0,
    ArrowDown: 0
}

let interval;

// for(let i =0; i<16; i++){
//     context.clearRect(0,0,width,height)
//     context.fillRect(x=(x+25),0,width/25,height/25); 
//     console.log(i,x)  
// }

// let interval =  setInterval(
// function(){
//     context.clearRect(0,0,width,height)
//     context.fillRect(x=(x+16),0,width/25,height/25);
//     console.log(x)
//     if(x==384){clearInterval(interval)}
// }
// ,100)

function gameOver(){
    clearInterval(interval)
    context.clearRect(0,0,width,height)
    context.fillRect(0,0,width/25,height/25);
    context.fillText("gameOver",width/50+150,height/50+200)
    x=0;
    y=0;
    cts = {
        ArrowRight: 0,
        ArrowLeft: 0,
        ArrowUp: 0,
        ArrowDown: 0
    };
    dirs = {
        ArrowRight: false,
        ArrowLeft: false,
        ArrowUp: false,
        ArrowDown: false
    }
    createdotchecker = 0;
    scorecount=0;
    boxes=[1]
}

let createdotchecker = 0;

let boxes = [1];



// window.addEventListener("keydown",function(e){
//     let key  = e.key
//     console.log(key,x,y)
//     if(createdotchecker==0){
//         createDot();
//         createdotchecker++;
//     }


//     if(key == "ArrowLeft"){ 
        
//         dirs.ArrowLeft = true
//         dirs.ArrowRight = false
//         cts.ArrowLeft++;

//         cts.ArrowDown = 0
//         cts.ArrowUp = 0
//         cts.ArrowRight = 1

//         dirs.ArrowDown = false
//         dirs.ArrowUp = false

//         if(cts.ArrowLeft == 1){
//         clearInterval(interval)}
        

//         if(dirs.ArrowLeft == true && cts.ArrowLeft==1){
//             interval =  setInterval(
//                 function(){
//                     context.clearRect(x,y,width/25,height/25)
//                     if(x>=0) x = x-16;
//                     context.fillRect(x,y,width/25,height/25);

//                     if(x==z && y==y1){
//                         scorecount+=1;
//                         score.innerText = scorecount
//                         createDot()
//                         boxes.push(1)
//                     }


//                     console.log(x,y,interval)
//                     if(x<0){
//                         // clearInterval(interval);
//                         gameOver()
//                     }
//                 }
//             ,100)
//         }

//     }

//     if(key == "ArrowRight"){
        
//         dirs.ArrowRight = true
//         dirs.ArrowLeft = false
//         cts.ArrowRight++;

//         cts.ArrowDown = 0
//         cts.ArrowUp = 0
//         cts.ArrowLeft = 1

//         dirs.ArrowDown = false
//         dirs.ArrowUp = false

//         if(cts.ArrowRight == 1){
//         clearInterval(interval)}
        

//         if(dirs.ArrowRight == true && cts.ArrowRight==1){
//             interval =  setInterval(
//                 function(){
//                     // context.clearRect(0,0,width,height)
//                     context.clearRect(x,y,width/25,height/25)
//                     console.log(z,y1)
//                     if(x<=384) x = x+16;
//                     context.fillRect(x,y,width/25,height/25);

//                     if(x==z && y==y1){
//                             scorecount+=1;
//                             score.innerText = scorecount
//                             createDot()
//                             boxes.push(1)
//                     }
                    
//                     console.log(x,y,interval)
//                     if(x>384){
//                         // clearInterval(interval);
//                         gameOver()
//                     }
                    

//                 }
//             ,100)
//         }
        
//     }

//     if(key == "ArrowUp"){

//         dirs.ArrowUp = true
//         dirs.ArrowDown = false
//         cts.ArrowUp++;

//         cts.ArrowRight = 0
//         cts.ArrowLeft = 0
//         cts.ArrowDown = 1

//         dirs.ArrowLeft = false
//         dirs.ArrowRight = false

//         if(cts.ArrowUp==1){
//         clearInterval(interval)}

//         if(dirs.ArrowUp == true && cts.ArrowUp == 1){
//             interval =  setInterval(
//                 function(){
//                     context.clearRect(x,y,width/25,height/25)
//                     if(y>=0) y = y-16;
//                     context.fillRect(x,y,width/25,height/25);

//                     if(x==z && y==y1){
//                         scorecount+=1;
//                         score.innerText = scorecount
//                         createDot()
//                         boxes.push(1)
//                 }

//                     console.log(x,y,interval)
//                     if(y<0){
//                         // clearInterval(interval);
//                         gameOver()
//                     }
//                 }
//             ,100)
//         }

//     }
//     if(key == "ArrowDown"){

//         dirs.ArrowDown = true
//         dirs.ArrowUp = false
//         cts.ArrowDown++;

//         cts.ArrowRight = 0
//         cts.ArrowLeft=0
//         cts.ArrowUp = 1

//         dirs.ArrowLeft = false
//         dirs.ArrowRight = false

//         if(cts.ArrowDown==1){
//         clearInterval(interval)}

//         if(dirs.ArrowDown == true && cts.ArrowDown == 1){
//             interval =  setInterval(
//                 function(){
//                     context.clearRect(x,y,width/25,height/25)
//                     if(y<=384) y = y+16;
//                     context.fillRect(x,y,width/25,height/25);

//                     if(x==z && y==y1){
//                         scorecount+=1;
//                         score.innerText = scorecount
//                         createDot()
//                         boxes.push(1)
                        
//                 }

//                     console.log(x,y,interval)
//                     if(y>384){
//                         // clearInterval(interval);
//                         gameOver()
//                     }
//                 }
//             ,100)
//         }


//     }

// })


let z,z1,y1,y2


function createDot(){
    context.clearRect(z,y1,width/25,height/25)
    z= Math.floor(Math.random()*400)
    z1 = z%16;
    console.log(z,z1)
    
    switch (z1){
        case 0:
            break;
        case 1:
            z=z-1
            break;
        case 2:
            z=z-2
            break;
        case 3:
            z=z-3
            break;
        case 4:
            z=z-4
            break;
        case 5:
            z=z-5
            break;
        case 6:
            z=z-6
            break;
        case 7:
            z=z-7
            break;  
        case 8:
            z=z-8
            break;
        case 9:
            z=z-9
            break;
        case 10:
            z=z-10
            break;
        case 11:
            z=z-11
            break;
        case 12:
            z=z-12
            break;
        case 13:
            z=z-13
            break;
        case 14:
            z=z-14
            break;
        case 15:
            z=z-15
            break; 
        default:
            break;     
    }    
    
    y1 = Math.floor(Math.random()*400)
    y2 = y1%16
    
    switch (y2){
        case 0:
            break;
        case 1:
            y1=y1-1
            break;
        case 2:
            y1=y1-2
            break;
        case 3:
            y1=y1-3
            break;
        case 4:
            y1=y1-4
            break;
        case 5:
            y1=y1-5
            break;
        case 6:
            y1=y1-6
            break;
        case 7:
            y1=y1-7
            break;  
        case 8:
            y1=y1-8
            break;
        case 9:
            y1=y1-9
            break;
        case 10:
            y1=y1-10
            break;
        case 11:
            y1=y1-11
            break;
        case 12:
            y1=y1-12
            break;
        case 13:
            y1=y1-13
            break;
        case 14:
            y1=y1-14
            break;
        case 15:
            y1=y1-15
            break; 
        default:
            break;     
    }
    
    context.fillStyle = 'orange'
    context.fillRect(z,y1,width/25,height/25)


    console.log(z,z1)
    console.log(y1,y2)
}

function incrementSnake(){
let map = boxes.map(function(indexValue){
    context.fillRect(x,y,width/25,height/25);
    x=x+16
    console.log(x)
    return x
    })
x=x-((boxes.length-1)*16)
context.clearRect(x-((boxes.length-1)*16),0,width/25,height/25)
}

function foodCount(){

}


window.addEventListener("keydown",function(e){
    let key  = e.key
    console.log(key,x,y)
    if(createdotchecker==0){
        createDot();
        createdotchecker++;
    }


    if(key == "ArrowLeft"){ 
        
        dirs.ArrowLeft = true
        dirs.ArrowRight = false
        cts.ArrowLeft++;

        cts.ArrowDown = 0
        cts.ArrowUp = 0
        cts.ArrowRight = 1

        dirs.ArrowDown = false
        dirs.ArrowUp = false

        if(cts.ArrowLeft == 1){
        clearInterval(interval)}
        

        if(dirs.ArrowLeft == true && cts.ArrowLeft==1){
            interval =  setInterval(
                function(){
                    boxes.map(function(indexValue){
                        context.fillRect(x,y,width/25,height/25);
                        if(x>=0) x=x-16
                    })

                    if(x==z && y==y1){
                        scorecount+=1;
                        score.innerText = scorecount
                        createDot()
                        boxes.push(1)
                    }

                    if(x<0){
                        // clearInterval(interval);
                        gameOver()
                    }

                    console.log(x,y,interval)

                    x=x+((boxes.length+1)*16)
                    context.clearRect(x,0,width/25,height/25)
                    x=x-32 

                }
            ,100)
        }

    }

    if(key == "ArrowRight"){
        
        dirs.ArrowRight = true
        dirs.ArrowLeft = false
        cts.ArrowRight++;

        cts.ArrowDown = 0
        cts.ArrowUp = 0
        cts.ArrowLeft = 1

        dirs.ArrowDown = false
        dirs.ArrowUp = false

        if(cts.ArrowRight == 1){
        clearInterval(interval)}
        

        if(dirs.ArrowRight == true && cts.ArrowRight==1){
            interval =  setInterval(
                function(){
                    // context.clearRect(0,0,width,height)
                    boxes.map(function(indexValue){
                        context.fillRect(x,y,width/25,height/25);
                        if(x<=384) x=x+16
                    })
                    console.log(x)
                    if(x==z && y==y1){
                            scorecount+=1;
                            score.innerText = scorecount
                            createDot()
                            boxes.push(1)
                    }
                    
                    if(x>384){
                        // clearInterval(interval);
                        gameOver()
                    }

                    x=x-((boxes.length+1)*16)
                    context.clearRect(x,0,width/25,height/25)
                    x=x+32     
                    // console.log(x)
                    
                    // console.log(x,y,interval)
                    

                }
            ,100)
        }
        
    }

    if(key == "ArrowUp"){

        dirs.ArrowUp = true
        dirs.ArrowDown = false
        cts.ArrowUp++;

        cts.ArrowRight = 0
        cts.ArrowLeft = 0
        cts.ArrowDown = 1

        dirs.ArrowLeft = false
        dirs.ArrowRight = false

        if(cts.ArrowUp==1){
        clearInterval(interval)}

        if(dirs.ArrowUp == true && cts.ArrowUp == 1){
            interval =  setInterval(
                function(){

                    boxes.map(function(indexValue){
                        context.fillRect(x,y,width/25,height/25);
                        if(y>=0) y=y-16
                    })

                    if(x==z && y==y1){
                        scorecount+=1;
                        score.innerText = scorecount
                        createDot()
                        boxes.push(1)
                }

                    console.log(x,y,interval)
                    if(y<0){
                        // clearInterval(interval);
                        gameOver()
                    }

                    y=y+((boxes.length+1)*16)
                    context.clearRect(x,0,width/25,height/25)
                    y=y-32   
                }
            ,100)
        }

    }
    if(key == "ArrowDown"){

        dirs.ArrowDown = true
        dirs.ArrowUp = false
        cts.ArrowDown++;

        cts.ArrowRight = 0
        cts.ArrowLeft=0
        cts.ArrowUp = 1

        dirs.ArrowLeft = false
        dirs.ArrowRight = false

        if(cts.ArrowDown==1){
        clearInterval(interval)}

        if(dirs.ArrowDown == true && cts.ArrowDown == 1){
            interval =  setInterval(
                function(){
                    boxes.map(function(indexValue){
                        context.fillRect(x,y,width/25,height/25);
                        if(y<=384) y=y+16
                    })

                    if(x==z && y==y1){
                        scorecount+=1;
                        score.innerText = scorecount
                        createDot()
                        boxes.push(1)
                        
                }

                    console.log(x,y,interval)
                    if(y>384){
                        // clearInterval(interval);
                        gameOver()
                    }

                    y=y-((boxes.length+1)*16)
                    context.clearRect(x,0,width/25,height/25)
                    y=y+32   
                }
            ,100)
        }


    }

})











// let boxes = [1,2,3];
// console.log('first block')
// let map = boxes.map(function(indexValue){
//     context.fillRect(x,y,width/25,height/25);
//     console.log(x)
//     x=x+16
// })
// console.log(map)


// window.addEventListener("keydown",function(e){
//     console.log(e.key)
 
//     if(e.key == "ArrowRight"){
//         console.log('right')     
        
//         setInterval(function(){
//             boxes.map(function(indexValue){
//                 context.fillRect(x,y,width/25,height/25);
//                 x=x+16
//             })

//             x=x-((boxes.length+1)*16)
//             context.clearRect(x,0,width/25,height/25)
//             x=x+32     
//             console.log(x)
//         },500)
//     }
//     if(e.key == "ArrowDown"){
//         console.log('down')
//     }

// })
