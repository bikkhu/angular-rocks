/**
 * @ngdoc function
 * @name projectApp.controller:TheBeatlesCtrl
 * @description
 * # TheBeatlesCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('TheBeatlesCtrl', function ($scope, Page) {
  	Page.setTitle("The Beatles");
  	Page.setDescription("The Beatles fue una banda de pop/rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y críticamente aclamada en la historia de la música popular. Formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista).");
  	Page.setKeyWords("beatles,pop,lennon,banda");
  });