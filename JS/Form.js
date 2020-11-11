class Form{
    constructor(){
        this.button=createButton('start')
        this.button.position(width/2,height/2)
    }
    display(){
       
        this.button.mousePressed(()=>{
        this.button.hide()
        
        playerCount=playerCount+1
        player.index=playerCount
        player.updateCount(playerCount)
           


    })
   
    }
}