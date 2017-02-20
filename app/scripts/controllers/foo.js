
/**
 * @ngdoc function
 * @name projectApp.controller:FooCtrl
 * @description
 * # FooCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('FooCtrl', function ($scope, Page) {
  	Page.setTitle("Angular Rocks");
  	Page.setDescription("Esto es la descripción por defecto.");
  	Page.setKeyWords("angular,rocks,default");
  });