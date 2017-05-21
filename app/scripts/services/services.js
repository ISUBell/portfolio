'use strict';

angular.module('portfolioApp')
  .service('basicService', [function() {
    this.serviceInfo = "information coming from services.js";
  }]);