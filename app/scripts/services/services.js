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
        image: '',
        category:'html',
        description: 'This website was built using AngularJS, and uses a single page application design. '
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
        image: '',
        category: 'html',
        description: 'NodeJS application that will perform basic CRUD operations via a command line interface'
      },
      {
        name: 'database app',
        image: '',
        category: 'java',
        description: 'Built using Spring MVC and Java. Uses MySQL to interact with the database.'
      }
    ];
    
    this.getProjects = function() {
      return projects;
    };
    
    this.getProject = function (index) {
      return projects[index];
    };
  
  }]);