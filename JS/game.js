class Game{
    constructor(){

    }
    getState(){
        database.ref('gameState').on("value",function(data){
            gameState=data.val()
        })
    }
    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        background("lightgreen")
        if (gameState===0){
        player=new Player()
        player.getCount()
        form=new Form()
        form.display()
        }
        ground=createSprite(windowWidth/2, height-20, width, 20);
        ob1=createSprite(width/4, height-105, 60, 150);
        ob2=createSprite(width*3/4, height-200, 200, 50);
        pl1=createSprite(width/5, height-105, 50, 50);
        pl2=createSprite(width*3/4, height-300, 50, 50);

    }
    play(){
        player.getRank()
        form.greeting.hide()
        player.getPlayerInfo()
       
        //console.log(allPlayers)
        if(allPlayers!==undefined){
            background(groundimage)
            image(trackimage,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index=0
            var x=200
            var y=0
            for(var plr in allPlayers){
                index=index+1
                x=x+200
                y= displayHeight-allPlayers[plr].distance-200
                cars[index-1].x=x
                cars[index-1].y=y
                if(index===player.index){
                    fill("red")
                    ellipse(x,y,60,60)
                    cars[index-1].shapeColor="red"
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y
                }
            }
            
        }
        if(player.distance>3460){
            gameState=2;
            player.rank++;
            player.updateRank(player.rank)
            console.log(player.rank)
        }
        drawSprites();
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance=player.distance+10
            player.update()
        }
        if(gameState==2){
            fill("red")
            textSize(30)
            text("player rank : "+player.rank,displayWidth/2-100,displayHeight-allPlayers[plr].distance-100)
        }
    }
}