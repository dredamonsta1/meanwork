myApp.controller('associationsController', ['playerFactory', 'teamFactory', function(playerFactory, teamFactory) {
    var self = this;
    playerFactory.getAll(function(data){
        console.log(data);

        self.players = data;
    });
    teamFactory.getAll(function(data){

        console.log(data);

        self.teams = data;
    });



    this.makeAss = function(){

        console.log(self.newAssociation);
        playerFactory.addAss(self.newAssociation, function(data){

        })


    };




    this.deleteAssociation = function(index){

        teamFactory.remove(index, function(data){
            self.team=data;
        });
        // teamFactory.remove(index, function(data){
        //     self.team=data;


        console.log(index);

    }


}]);
    // this.test = "am i working?"
    // var self = this;
    // AssociationFactory.getAll(function(data){
    //     console.log(data);
    //     self.associations=data
    // });
    // this.addAssociation = function(){
    //     console.log(self.newAssociation);
    //     associationFactory.create(self.newAssociation, function(data){
    //         self.Associations=data
    //     })
    // }
    // this.deleteAssociation = function(index){
    //     AssociationFactory.remove(index, function(data){
    //         self.Associations=data
    //     })
    // }
//
// })