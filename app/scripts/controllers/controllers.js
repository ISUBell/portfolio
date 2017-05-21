'use strict';

angular.module('portfolioApp')
  .controller('BasicController', ['$scope', 'basicService', function($scope, basicService) {
    $scope.controllerInfo = "Information coming from BasicController";
  
    $scope.serviceInfo = basicService.serviceInfo;
  }]);