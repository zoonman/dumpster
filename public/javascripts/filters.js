'use strict';
/* Filters */
angular.module('dumpsterApp.filters', []).
    filter('interpolate', function (version) {
      return function (text) {
        return String(text).replace(/\%VERSION\%/mg, version);
      }
    });