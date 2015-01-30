'use strict';
/* Directives */
angular.module('dumpsterApp.directives', []).
    directive('appVersion', function (version) {
      return function(scope, elm, attrs) {
        elm.text(version);
      };
    });