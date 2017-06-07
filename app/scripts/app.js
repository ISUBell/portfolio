'use strict';

angular.module('portfolioApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
  
  var appState = {
    name: 'app',
    url: '/',
    views: {
      'header': {
        templateUrl: '../views/header.html'
      },
      'content': {
        template: '<p>Appstate content template from app.js</p>'
      },
      'footer': {
        templateUrl: '../views/footer.html'
      }
    }
  };
  
  $stateProvider.state(appState);

  $stateProvider.state('app.about', {
    url: 'about',
    views: {
      'content@': {
        templateUrl: '../views/about.html'
      }
    }
  });
  
  $stateProvider.state('app.projects', {
    url: 'projects',
    views: {
      'content@': {
        templateUrl: '../views/projects.html'
      }
    }
  });
  
    $stateProvider.state('app.contact', {
    url: 'contact',
    views: {
      'content@': {
        templateUrl: '../views/contact.html'
      }
    }
  });
  
  $urlRouterProvider.otherwise('/');
  
});