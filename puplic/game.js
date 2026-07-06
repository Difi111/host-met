const canvas=document.getElementById("game");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const TILE=64;
const MAP=50;

const keys={};

document.addEventListener("keydown",e=>{
    keys[e.key]=true;
});

document.addEventListener("keyup",e=>{
    keys[e.key]=false;
});

const player={
    x:1600,
    y:1600,
    speed:4,

    wood:0,
    stone:0,
    food:0,
    money:100
};

function update(){

    if(keys["w"]) player.y-=player.speed;
    if(keys["s"]) player.y+=player.speed;
    if(keys["a"]) player.x-=player.speed;
    if(keys["d"]) player.x+=player.speed;

    document.getElementById("wood").innerText=player.wood;
    document.getElementById("stone").innerText=player.stone;
    document.getElementById("food").innerText=player.food;
    document.getElementById("money").innerText=player.money;
}

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    const camX=player.x-canvas.width/2;
    const camY=player.y-canvas.height/2;

    for(let y=0;y<MAP;y++){

        for(let x=0;x<MAP;x++){

            ctx.fillStyle=(x+y)%2?"#73c96d":"#68b95d";

            ctx.fillRect(
                x*TILE-camX,
                y*TILE-camY,
                TILE,
                TILE
            );

            ctx.strokeStyle="#4b9447";

            ctx.strokeRect(
                x*TILE-camX,
                y*TILE-camY,
                TILE,
                TILE
            );

        }

    }

    ctx.fillStyle="red";

    ctx.beginPath();

    ctx.arc(
        canvas.width/2,
        canvas.height/2,
        18,
        0,
        Math.PI*2
    );

    ctx.fill();
}

function gameLoop(){

    update();
    draw();

    requestAnimationFrame(gameLoop);

}

gameLoop();
