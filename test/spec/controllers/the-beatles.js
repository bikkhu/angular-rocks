'use strict';

describe('Controller: TheBeatlesCtrl', function () {

  // load the controller's module
  beforeEach(module('projectApp'));

  var TheBeatlesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TheBeatlesCtrl = $controller('TheBeatlesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

 it('should follow the rigth path', function () {
    expect(tester.path()).to.equal("/the-beatles");
  });

 it('should modify the title', function () {
    expect(Page.title()).to.equal("The Beatles");
  });

  it('should modify the description', function () {
    expect(Page.description).to.equal("The Beatles fue una banda de pop/rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y críticamente aclamada en la historia de la música popular. Formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista).");
  });

  it('should modify the key words', function () {
    expect(Page.keyWords).to.equal("beatles,pop,lennon,banda");
  });

});
