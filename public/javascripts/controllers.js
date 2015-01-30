'use strict';
/* Controllers */
angular.module('dumpsterApp.controllers', []).
    controller('AppCtrl', function ($scope, socket) {
      $scope.tl = 20;
      $scope.news = [];
      socket.on('send:name', function (data) {
        $scope.name = data.name;
      });

      socket.on('news', function (data) {
        $scope.news.push(data);

        if ($scope.news.length > $scope.tl) {
          $scope.news = $scope.news.slice(-$scope.tl);
        }

      });
    }).
    controller('MyCtrl1', function ($scope, socket) {
      socket.on('send:time', function (data) {
        $scope.time = data.time;
      });
    }).
    controller('MyCtrl2', function ($scope) {
      // write Ctrl here
    });