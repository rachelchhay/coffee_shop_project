'use strict';

const yelp = require('yelp-fusion');

const token = yelp.accessToken(process.env.YELP_ID, process.env.YELP_SECRET).then(response => {
  // console.log(response.jsonBody.access_token);
}).catch(e => {
  // console.log(e);
});

const client = yelp.client(process.env.YELP_TOKEN);

// Everything is inside the getYelpResponse function, which is being called in controllers -> coffeeshops.js


// console.log(process.env.YELP_TOKEN);
//ENABLE line 16 to test the API key in terminal [node bin/dev]//

const getYelpResponse = (res, term, body) => {

  let yelpResponseName = [];
  let yelpResponseRating = [];
  let yelpResponsePrice = [];
  let yelpResponseLocation = [];

  let yelpResponse = {
    yelpResponseName,
    yelpResponseRating,
    yelpResponsePrice,
    yelpResponseLocation
  };




    client.search({
      term: term,
      location: body.location
    }).then(response => {
      for(let i = 0; i < (response.jsonBody.businesses).length; i++) {
        // yelpResponse.push(response.jsonBody.businesses[i].name
          // ,
          // response.jsonBody.businesses[i].rating, response.jsonBody.businesses[i].price, response.jsonBody.businesses[i].location.address1
        // )

        yelpResponseName.push(response.jsonBody.businesses[i].name);
        yelpResponseRating.push(response.jsonBody.businesses[i].rating);
        yelpResponsePrice.push(response.jsonBody.businesses[i].price);
        yelpResponseLocation.push(response.jsonBody.businesses[i].location.address1)
      }
      console.log(yelpResponse);
      res.send(yelpResponse);
    }).catch(e => {
      console.log(e);
    });

    client.autocomplete({
      text: body.location
    }).then(response => {
      for(let i =0; i < (response.jsonBody.terms).length; i++) {
        console.log(response.jsonBody.terms[i].text);
      }
    }).catch(e => {
      console.log(e);
    });

}


module.exports = getYelpResponse;
