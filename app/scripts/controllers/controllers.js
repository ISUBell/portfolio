'use strict';

angular.module('portfolioApp')
  .controller('BasicController', ['$scope', 'basicService', function($scope, basicService) {
    $scope.controllerInfo = "Information coming from BasicController";
  
    $scope.serviceInfo = basicService.serviceInfo;
  }])

  .controller('ProjectController', ['$scope', 'projectService', function($scope, projectService) {
    
    $scope.tab = 1;
    $scope.filtText = 'html';
    
    $scope.projects = projectService.getProjects();
    
    $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 1) {
                    $scope.filtText = "html";
                }
                else if (setTab === 2) {
                    $scope.filtText = "java";
                }
                else if (setTab === 3) {
                    $scope.filtText = "python";
                }
                else {
                    $scope.filtText = "html";
                }
            };
    
    $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
    };
  }]);