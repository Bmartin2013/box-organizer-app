'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    css: 'css/view2.css'
  });
}])

.controller('View2Ctrl', ['$scope','$http', function($scope,$http) {

  $scope.addBox = () => {
    let data = {
      "id": 1,
      "name": $scope.boxName,
      "items": [{"id":1,"name": $scope.itemName,"descripcion": $scope.itemDescription}]
    };

    $http({
      method: "POST",
      url: `${__env.apiUrl}/addbox`,
      data: data
    }).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

}]);