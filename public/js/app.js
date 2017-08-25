const app = angular.module('MyApp', []);
console.log('app.js');

app.controller('MyController', ['$http', function($http) {

  const controller=this;

  //COFFESHOP FUNCTIONS  -- WORKING///
  //-------//
  this.coffeeshops = [];
  this.indexOfEditFormToShow = 0;
  this.yelpCoffeeshops = [];
  this.launchLogin = false;
  this.indexOfCoffeeshop;
  this.openForm = true;

  this.showLogin = function(){
    this.launchLogin = true;
  }

  this.hideLogin = function(){
    this.closeLoginWindow = true;
  }


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
        console.log("LOGIN DATA:");
        console.log(response.data);
        controller.foundUser = response.data;
        controller.username = '';
        controller.password = '';

        if(response.data){
          controller.isLoggedIn = true;
          controller.hideForm = false;
        }
        controller.hideLogin();
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
        console.log("REGISTERED DATA:");
        console.log(response.data);
        controller.createUser = response.data;
        controller.registerUsername = '';
        controller.registerPassword = '';

        if(response.data){
          controller.isLoggedIn = true;
          controller.hideForm = false;
        }
        controller.hideLogin();
      },
      function(error){
        console.log(error);
      }
    )
  }
  // Register function end=================

  // Logout function ======================
  this.logout = function(username, password){
    $http({
      method: 'GET',
      url: '/session/logout',
      data: {
        username: this.logoutUsername,
        password: this.logoutPassword
      }
    }).then(
      function(response){
        console.log("LOGOUT");
        controller.isLoggedIn = false;
        location.reload(true)
      },
      function(error){
        console.log(error);
      }
    )
  }

  // End logout function =================


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
        for(let i = 0; i < (response.data).length; i++){
          response.data[i].name,
          response.data[i].rating,
          response.data[i].price,
          response.data[i].address1
        }

        controller.yelpCoffeeshops = response.data;
        controller.yelpLocation = '';
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

  // Create form function ==================


  this.openForm = function(){
    this.hideForm = false;
  }

  this.createCoffeeshop = function(){

    $http({
      method: 'POST',
      url: '/coffeeshops',
      data: {
        name: this.name,
        rating: this.rating,
        price: this.price,
        address1: this.address1
        }
      }).then(
        function(response){
          controller.getCoffeeshops();
          controller.name = ''
          controller.rating = ''
          controller.price = ''
          controller.address1 = ''
          controller.hideForm = true;
        },
        function(error){

        }
    );
  }

    this.editCoffeeshop = function(coffeeshop){

        $http({
          method: 'PUT',
          url: '/coffeeshops/' + coffeeshop._id,
          data: {
            name: this.updatedName,
            rating: this.updatedRating,
            price: this.updatedPrice,
            address1: this.updatedAddress1
          }
        }).then(
          function(response){
            controller.getCoffeeshops();
            controller.name = ''
            controller.rating = ''
            controller.price = ''
            controller.address1 = ''
            controller.hideForm = true;
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

}])
