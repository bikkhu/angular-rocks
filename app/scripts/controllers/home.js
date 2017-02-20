/**
 * @ngdoc function
 * @name projectApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('HomeCtrl', function ($scope, Page) {
  	Page.setTitle("Angular Rocks");
  	Page.setDescription("Esto es la descripción por defecto.");
  	Page.setKeyWords("angular,rocks,default");
  });