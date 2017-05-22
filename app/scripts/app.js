'use strict';

angular.module('portfolioApp', ['ui.router'])
  .config(function($stateProvider) {
  
  var aboutState = {
    name: 'about',
    url: '/',
    template: '<p>About state template from app.js</p>'
  };
  
  $stateProvider.state(aboutState);

  $stateProvider.state('aboutURL', {
    url: '/about',
    templateUrl: '../views/about.html'
  })
  
});