myApp.factory('playerFactory', function(){
    var factory = {};
    factory.players = [{
        name: 'Kevin Garnett'
    },
        {
         name: 'Dangelo Russell'

        },
        {
         name: 'Penny Hardaway'
        }];
    factory.getAll = function(callback){
        callback(factory.players)
    };
    factory.create = function(playerToCreate, callback){
           factory.players.push(playerToCreate);
           callback(factory.players);
    };
    factory.remove = function(playerIdx, callback){
        factory.players.splice(playerIdx,1);
        callback(factory.players)
    };
    factory.addAss = function(assData, callback){
        var playerToChange = factory.players[assData.playerIndex];
        playerToChange.team = assData.team;
        callback(factory.players)
    };
    factory.removeAss = function(idxOfPlayer, callback) {
        var playerToChange = factory.players[idxOfPlayer];
        playerToChange.team = "";
        callback(factory.players)
    };
    return factory;


});