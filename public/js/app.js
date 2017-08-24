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

  // Hide Login =========================
    this.hideLogin = function(){
      $http({
        method: 'POST',
        url: '/coffeeshops/showLogin'
      }).then(
        function(response){
          controller.closeLoginWindow = true;
          console.log('this works');
        },
        function(error){
          console.log(error);
        }
      )
    }

  // End of hide login ===================

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
        hideLogin();
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
        hideLogin();
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

  this.hideCreateForm = function(){

    $http({
      method: 'POST',
      url: '/coffeeshops/createForm'
    }).then(
      function(response){
        controller.hideCreateForm = true;
      },
      function(error){
        console.log(error);
      }
    )
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


//    this.user = [];
// this.indexOfEditFormToShow = 0;
//
//
// this.getUsers =function(){
//
//  $http({
//    method: 'GET',
//    url: '/user'
//  }).then(
//    function(response){
//      controller.user=response.data
//
//    },
//    function(error){
//
//    }
//  )
// }
//
// this.createUser = function(){
//
//  $http({
//    method: 'POST',
//    url: '/user',
//    data: {
//      name: this.name,
//      location: this.location,
//      favoritedrink: this.favoritedrink,
//      work: true,
//      // freeWifi: true,
//      // drivethru:true
//      }
//    }).then(
//      function(response){
//        controller.getUsers();
//      },
//      function(error){
//
//      }
//  );
// }
//
// this.editUser = function(user){
//
//    $http({
//      method: 'PUT',
//      url: '/user/' + user._id,
//      data: {
//        name: this.updatedUsername,
//        location: this.updatedUserlocation,
//        description: this.updatedUserdrink
//        // work: true,
//        // freeWifi: true,
//        // drivethru:true
//      }
//    }).then(
//      function(response){
//        controller.getUsers();
//      },
//      function(error){
//
//      }
//    );
//  }
//
// this.deleteUser = function(user){
//
// $http({
//   method: 'DELETE',
//   url: '/user/' + user._id,
//
// }).then(
//   function(response){
//     controller.getUsers();
//   },
//   function(error){
//    }
// );
// }
////END USER FUNCTIONS//


  this.getCoffeeshops();

}])
