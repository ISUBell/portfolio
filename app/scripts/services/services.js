'use strict';

angular.module('portfolioApp')
  .service('basicService', [function() {
    this.serviceInfo = "information coming from services.js";
  }])

  .service('projectService', [function() {
    this.serviceInfo = "info coming from projectService in services.js"
    
    var projects = [
      {
        name:'portfolio',
        image: '',
        category:'html',
        description: 'A sample website'
      },
      {
        name: 'database app',
        image: '',
        category: 'java',
        description: 'Built using spring MVC and Java'
      }
    ];
    
    this.getProjects = function() {
      return projects;
    };
    
    this.getProject = function (index) {
      return projects[index];
    };
  
  }]);