'use strict';

const yelp = require('yelp-fusion');

const token = yelp.accessToken('HE07TPuDAVs_O6pJsI9z6g', 'vX6oRVnFpWz2rF22RBCmxGEIzdEVmE8kEXdKn9QMAWoPgQz1DNgaAWlAUqMFIXoh').then(response => {
  // console.log(response.jsonBody.access_token);
}).catch(e => {
  // console.log(e);
});

const client = yelp.client('oJ5UEBNgziEmy5_wUULQqDi1AIUu9Ew1EZ17InQEV-1uO_ZN3gw7jESfs7LO6cABvf5IXluKmd_TzgZUuHwhLMZ7SP1IDtpjVsM82UZOun0CD_6sremos4E0NL2YWXYx');

// Everything is inside the getYelpResponse function, which is being called in controllers -> coffeeshops.js


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
