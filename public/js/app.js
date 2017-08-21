const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http) {

  const controller=this;

  //COFFESHOP FUNCTIONS  -- WORKING///
  //-------//
  this.coffeeshops = [];
  this.indexOfUserEditFormToShow = 0;

  this.getYelpResponse = function(){
    $http({
      method: 'GET',
      url: '/coffeeshops/getYelpResponse'
    }).then(
      function(response){
        // console.log(response);
        controller.coffeeshops = response.data;
      },
      function(error){
        console.log(error);
      }
    )
  }


  this.getCoffeeshops =function(){

    $http({
      method: 'GET',
      url: '/coffeeshops'
    }).then(
      function(response){
        controller.coffeeshops=response.data

      },
      function(error){

      }
    )
  }

  this.createCoffeeshop = function(){

    $http({
      method: 'POST',
      url: '/coffeeshops',
      data: {
        name: this.name,
        location: this.location,
        description: this.description
        // freeWifi: true,
        // drivethru:true
        }
      }).then(
        function(response){
          controller.getCoffeeshops();
        },
        function(error){

        }
    );
  }

  // this.updateDevMovie = function(todo){
  //   let NewComplete;
  //   if(todo.complete === true){
  //     newComplete = false;
  //   } else {
  //       newComplete = true;
  //     }
  //     $http({
  //       method: 'PUT',
  //       url: '/devMovies/' + devMovie._id,
  //       data: {
  //         description: todo.description,
  //         complete: newComplete
  //       }
  //     }).then(
  //       function(response){
  //         controller.getDevMovies();
  //       },
  //       function(error){
  //
  //       }
  //     );
  //   }

    this.editCoffeeshop = function(coffeeshop){

        $http({
          method: 'PUT',
          url: '/coffeeshops/' + coffeeshop._id,
          data: {
            name: this.updatedName,
            location: this.updatedLocation,
            description: this.updatedDescription
            // freeWifi: true,
            // drivethru:true
          }
        }).then(
          function(response){
            controller.getCoffeeshops();
          },
          function(error){

          }
        );
      }

   this.deleteCoffeeshop = function(coffeeshop){

     $http({
       method: 'DELETE',
       url: '/coffeeshops/' + coffeeshop._id,

     }).then(
       function(response){
         controller.getCoffeeshops();
       },
       function(error){
        }
     );
   }

  this.getCoffeeshops();
  this.getYelpResponse();

}])
