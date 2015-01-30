/**
 * Created by zoonman on 1/28/15.
 */
'use strict';
// Declare app level module which depends on filters, and services
angular.module('dumpsterApp', [
  'ngRoute',
  'dumpsterApp.controllers',
  'dumpsterApp.filters',
  'dumpsterApp.services',
  'dumpsterApp.directives',
  // 3rd party dependencies
  'btford.socket-io'
]).
    config(function ($routeProvider, $locationProvider) {
      $routeProvider.
          when('/view1', {
            templateUrl: 'partials/partial1',
            controller: 'MyCtrl1'
          }).
          when('/view2', {
            templateUrl: 'partials/partial2',
            controller: 'MyCtrl2'
          }).
          otherwise({
            redirectTo: '/view1'
          });
      $locationProvider.html5Mode(true);
    });