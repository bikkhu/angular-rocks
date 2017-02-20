
/**
 * @ngdoc function
 * @name projectApp.controller:BarCtrl
 * @description
 * # BarCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('BarCtrl', function ($scope, Page) {
  	Page.setTitle("Angular Rocks");
  	Page.setDescription("Esto es la descripción por defecto.");
  	Page.setKeyWords("angular,rocks,default");
  });