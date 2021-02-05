class Game{
    constructor(){
 

    }
    //to read the gameState from the database
    getState(){
        var gameStateref = database.ref("gameState");
        gameStateref.on("value", function(data){
            gameState = data.val();

        })
    }
    //to update the gameState inside the database
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }

    }
}