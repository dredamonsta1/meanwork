myApp.controller('playersController', function(playerFactory){
    this.test = "am i working?";
    var self = this;
    playerFactory.getAll(function(data){
        console.log(data);
        self.players=data;
    });
    this.addPlayer = function(){
        console.log(self.newPlayer);
        playerFactory.create(self.newPlayer, function(data){
            self.players=data;
            self.newPlayer = {};
        })
    };
    this.deletePlayer = function(index){
        playerFactory.remove(index, function(data){
            self.players=data;
        })
    }

});