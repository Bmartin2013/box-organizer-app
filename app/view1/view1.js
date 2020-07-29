'use strict';


angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl',
      css: 'css/view1.css'
    });
  }])

  .controller('View1Ctrl', ['$scope', '$http', function ($scope, $http) {

    $http({
      method: "GET",
      url: `${__env.apiUrl}/boxes`
    }).then((response) => {
      $scope.boxes = response.data;
    }, (error) => {
      $scope.boxes = error.statusText;
    });

    $scope.createQR = (box) => {
      let qrText = `${box.name}`
      box.items.forEach(item => {
        qrText += ` \n - ${item.name}  ${item.description ? ": " + item.description : ""}`
      });
      return qrText;
    }

    $scope.getQR = (boxId) => {
      var myEl = angular.element( document.querySelector( `#showQr-${boxId}` ) );
      myEl.toggleClass('hidden'); 
    }

  }]);