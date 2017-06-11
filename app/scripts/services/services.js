'use strict';

angular.module('portfolioApp')
  .service('basicService', [function() {
    this.serviceInfo = "information coming from services.js";
  }])

  .service('projectService', [function() {
    this.serviceInfo = "info coming from projectService in services.js"
    
    var projects = [
      {
        name:'This Website',
        image: '../images/pic_angular.jpg',
        category:'html',
        description: 'This website was built using AngularJS, and uses a single page application design. This site was built using a variety of web development tools, including NPM scripts, Bootstrap, Git, JSHint, and lite-server. A non-minified/uglified version is available via the Github link below.',
        github:'https://github.com/ISUBell/portfolio'
      },
      {
        name:'Chat app',
        image:'',
        category:'html',
        description: 'NodeJS application that features a live chatroom. By following the below link you can access a live version of the application',
        github: ''
      },
      {
        name:'Todo app',
        image: "../images/GETtodos.PNG",
        category: 'html',
        description: 'NodeJS API that will perform CRUD operations on a NoSQL database. This takes the form of various todo\'s, that are grouped by registered users. The login for each user uses an encrypted and hashed password. This API is currently live on Heroku, and can be accessed via Postman or a similar method. The screenshots show a variety of calls and responses made to the live API. For testing out the API, make calls to the below website.',
        website: 'https://sleepy-savannah-84383.herokuapp.com/',
        github:'https://github.com/ISUBell/node-todo-api'
      },
      {
        name: 'Sports Statistics Database',
        image: '../images/main page.png',
        category: 'java',
        description: 'Built using a variety of modern tools, including Spring MVC, Hibernate, JDBC, Maven, and others. Parses college basketball statistics from a web resource into a cloud SQL database which is then displayed to the user.',
        github:'https://github.com/ISUBell/SportsTeamStatisticsDatabase'
      }
    ];
    
    this.getProjects = function() {
      return projects;
    };
    
    this.getProject = function (index) {
      return projects[index];
    };
  
  }]);