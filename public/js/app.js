const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http) {

  const controller=this;

  //COFFESHOP FUNCTIONS  -- WORKING///
  //-------//
  this.coffeeshops = [];

  this.indexOfUserEditFormToShow = 0;

  this.indexOfEditFormToShow = 0;
  this.yelpCoffeeshops = [];
  this.launchLogin = false;

  // Show Login =========================
    this.showLogin = function(){
      $http({
        method: 'POST',
        url: '/coffeeshops/showLogin'
      }).then(
        function(response){
          controller.launchLogin = true;
          console.log('this works');
          showLogin();
        },
        function(error){
          console.log(error);
        }
      )
    }

  // End of show login ===================

  // Login function ======================
  this.login = function(username, password){
    $http({
      method: 'POST',
      url: '/session/login',
      data: {
        username: this.username,
        password: this.password
      }
    }).then(
      function(response){
        console.log(response.data);
        controller.foundUser = response.data;
        controller.username = '';
        controller.password = '';
      },
      function(error){
        console.log(error);
      }
    )
  }
  // Login function end===================

  // Register function ===================
  this.register = function(username, password){
    $http({
      method: 'POST',
      url: '/session/register',
      data: {
        username: this.registerUsername,
        password: this.registerPassword
      }
    }).then(
      function(response){
        console.log(response.data);
        controller.createUser = response.data;
        controller.registerUsername = '';
        controller.registerPassword = '';
      },
      function(error){
        console.log(error);
      }
    )
  }
  // Register function end=================

  // Login function ======================
  this.login = function(username, password){
    $http({
      method: 'POST',
      url: '/session/login',
      data: {
        username: this.username,
        password: this.password
      }
    }).then(
      function(response){
        console.log(response.data);
        controller.foundUser = response.data;
        controller.username = '';
        controller.password = '';
      },
      function(error){
        console.log(error);
      }
    )
  }
  // Login function end===================

  // Register function ===================
  this.register = function(username, password){
    $http({
      method: 'POST',
      url: '/session/register',
      data: {
        username: this.registerUsername,
        password: this.registerPassword
      }
    }).then(
      function(response){
        console.log(response.data);
        controller.createUser = response.data;
        controller.registerUsername = '';
        controller.registerPassword = '';
      },
      function(error){
        console.log(error);
      }
    )
  }
  // Register function end=================



// Yelp Response =========================
  this.getYelpResponse = function(){
    $http({
      method: 'POST',
      url: '/coffeeshops/getYelpResponse',
      data: {
        location: this.yelpLocation
      }
    }).then(
      function(response){
        // console.log(response);
        controller.yelpCoffeeshops = response.data;
      },
      function(error){
        console.log(error);
      }
    )
  }

// End of Yelp Response ===================

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
        coffeeLocation: this.coffeeLocation,
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


   this.user = [];
this.indexOfEditFormToShow = 0;


this.getUsers =function(){

 $http({
   method: 'GET',
   url: '/user'
 }).then(
   function(response){
     controller.user=response.data

   },
   function(error){

   }
 )
}

this.createUser = function(){

 $http({
   method: 'POST',
   url: '/user',
   data: {
     name: this.name,
     location: this.location,
     favoritedrink: this.favoritedrink,
     work: true,
     // freeWifi: true,
     // drivethru:true
     }
   }).then(
     function(response){
       controller.getUsers();
     },
     function(error){

     }
 );
}

this.editUser = function(user){

   $http({
     method: 'PUT',
     url: '/user/' + user._id,
     data: {
       name: this.updatedUsername,
       location: this.updatedUserlocation,
       description: this.updatedUserdrink
       // work: true,
       // freeWifi: true,
       // drivethru:true
     }
   }).then(
     function(response){
       controller.getUsers();
     },
     function(error){

     }
   );
 }

this.deleteUser = function(user){

$http({
  method: 'DELETE',
  url: '/user/' + user._id,

}).then(
  function(response){
    controller.getUsers();
  },
  function(error){
   }
);
}
////END USER FUNCTIONS//


  this.getCoffeeshops();

}])
