'use strict';

const yelp = require('yelp-fusion');

const token = yelp.accessToken(process.env.YELP_TOKEN).then(response => {
  // console.log(response.jsonBody.access_token);
}).catch(e => {
  // console.log(e);
});

const client = yelp.client(process.env.YELP_CLIENT);

// Everything is inside the getYelpResponse function, which is being called in controllers -> coffeeshops.js
console.log(process.env.YELP_TOKEN);

const getYelpResponse = (res, term, body) => {


    let yelpResponse = [];

    client.search({
      term: term,
      location: body.location
    }).then(response => {
      for(let i = 0; i < (response.jsonBody.businesses).length; i++) {
        yelpResponse.push(response.jsonBody.businesses[i].name)
      }
      console.log(yelpResponse);
      res.send(yelpResponse);
    }).catch(e => {
      console.log(e);
    });

    client.autocomplete({
      text:'pizza'
    }).then(response => {
      for(let i =0; i < (response.jsonBody.terms).length; i++) {
        console.log(response.jsonBody.terms[i].text);
      }
    }).catch(e => {
      console.log(e);
    });

}


module.exports = getYelpResponse;
