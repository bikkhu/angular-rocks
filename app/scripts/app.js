'use strict';

/**
 * @ngdoc overview
 * @name projectApp
 * @description
 * # projectApp
 *
 * Main module of the application.
 */
angular
  .module('projectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
      })
      .when('/foo', {
        templateUrl: 'views/foo.html',
        controller: 'FooCtrl',
      })
      .when('/bar', {
        templateUrl: 'views/bar.html',
        controller: 'BarCtrl',
      })
      .when('/the-rolling-stones', {
        templateUrl: 'views/the-rolling-stones.html',
        controller: 'TheRollingStonesCtrl',
        title: 'The Rolling Stones'
      })
      .when('/the-beatles', {
        templateUrl: 'views/the-beatles.html',
        controller: 'TheBeatlesCtrl',
      })
      .when('/queen', {
        templateUrl: 'views/queen.html',
        controller: 'QueenCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('Page', function() {
    var title="Angular Rocks";
    var description="Esto es la descripción por defecto.";
    var keyWords="angular,rocks,default";
    return {  title: function(){return title;},
              setTitle: function(newTitle){title=newTitle;},
              description: function(){return description;},
              setDescription: function(newDescription){description=newDescription;},
              keyWords: function(){return keyWords;},
              setKeyWords: function(newKeyWords){keyWords=newKeyWords;}
    }
  }).controller('PageCtrl', function($scope, Page){
    $scope.Page = Page; 
  });

