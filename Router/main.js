const express = require("express");
const app = express();
let Router = express.Router();
const axios = require("axios");

/* const options = {
  method: 'GET',
  url: 'https://www.instagram.com/' + 'account4socialn' + '/following',
  responseType: 'html',
  params: {session_key: '<REQUIRED>'},
  headers: {

  }
}; */
Router.get('/', (req, res) => {
  res.render('index')
})
/* axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
}); */
  /* req.session.error_msg = "";
  
  if (req.session.loggedin) {
    res.render('index', {
      button: "LOGOUT",
      name: req.session.name,
      path: "/account/logout",
    });
  } else {
    res.render('index', {
      button: "SIGN IN",
      name: req.session.name,
      path: "/account/login",
    });
  }
});

Router.get('/security', (req, res) => {
  if (req.session.loggedin) {
    res.render('security', {
      button: "LOGOUT",
      name: req.session.name,
      path: "/account/logout",
    });
  } else {
    res.render('security', {
      button: "SIGN IN",
      name: req.session.name,
      path: "/account/login",
    });
  }
})

Router.get('/privacy-notice', (req, res) => {
  if (req.session.loggedin) {
    res.render('privacy', {
      button: "LOGOUT",
      name: req.session.name,
      path: "/account/logout",
    });
  } else {
    res.render('privacy', {
      button: "SIGN IN",
      name: req.session.name,
      path: "/account/login",
    });
  }
})

Router.get('/terms-of-service', (req, res) => {
  if (req.session.loggedin) {
    res.render('service', {
      button: "LOGOUT",
      name: req.session.name,
      path: "/account/logout",
    });
  } else {
    res.render('service', {
      button: "SIGN IN",
      name: req.session.name,
      path: "/account/login",
    });
  } 
});*/

Router.get('/robots.txt', (req, res) => {
  res.render("robots.txt");
});

Router.get('/sitemap.xmal', (req, res) => {
  res.render('sitemap.xml');
});

Router.get('/ads.txt', (req, res) => {
  res.render('ads.txt');
});

module.exports = Router;