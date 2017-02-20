/**
 * @ngdoc function
 * @name projectApp.controller:TheRollingStonesCtrl
 * @description
 * # TheRollingStonesCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('TheRollingStonesCtrl', function ($scope, Page) {
  	Page.setTitle("The Rolling Stones");
  	Page.setDescription("The Rolling Stones es una banda británica de rock originaria de Londres. La banda se fundó en abril de 1962 por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Ian Stewart y Charlie Watts.2 Brian Jones fue despedido en junio de 1969, falleciendo tres semanas después, siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975 y sería a su vez reemplazado por Ron Wood. Con el retiro de Bill Wyman en 1993 se incluyó al bajista Darryl Jones que, aunque toca con la banda desde la grabación del álbum Voodoo Lounge en 1994, no es un miembro oficial.");
  	Page.setKeyWords("londres,rolling,rock,jagger");
  });