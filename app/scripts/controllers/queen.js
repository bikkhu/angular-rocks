/**
 * @ngdoc function
 * @name projectApp.controller:QueenCtrl
 * @description
 * # QueenCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('QueenCtrl', function ($scope, Page) {
  	Page.setTitle("Queen");
  	Page.setDescription("Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa.");
  	Page.setKeyWords("queen,rock,londres,mercury");
  });