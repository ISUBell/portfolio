'use strict';

angular.module('portfolioApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
  
  var appState = {
    name: 'app',
    url: '/',
    views: {
      'header': {
        template: '<p>AppState header template</p>'
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
  })
  
  $urlRouterProvider.otherwise('/');
  
});