myApp.controller('teamsController', function(teamFactory){
    this.test = "am i working?";
    var self = this;
    teamFactory.getAll(function(data){
        console.log(data);
        self.teams=data
    });
    this.addTeam = function(){




        console.log(self.newTeam);
        teamFactory.create(self.newTeam, function(data){
            self.teams=data;
            self.newTeam = {};
        });
    };
    this.deleteTeam = function(index){
        teamFactory.remove(index, function(data){
            self.team=data;
        });
    }

});