myApp.factory('teamFactory', function(){
    var factory = {};
    factory.teams = [{
        name: 'Knicks'
    },
        {
            name: 'Warriors'

        },
        {
            name: 'Spurs'
        }];
    factory.getAll = function(callback){
        callback(factory.teams)
    };
    factory.create = function(teamToCreate, callback){
        factory.teams.push(teamToCreate);
        callback(factory.teams)
    };
    factory.remove = function(teamIdx, callback){
        factory.teams.splice(teamIdx,1);
        callback(factory.teams)
    };
    return factory;


});