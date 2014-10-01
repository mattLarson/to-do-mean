'use strict';

angular.module('toDoApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
