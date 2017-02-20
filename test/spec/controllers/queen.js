'use strict';

describe('Controller: QueenCtrl', function () {

  // load the controller's module
  beforeEach(module('projectApp'));

  var QueenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QueenCtrl = $controller('QueenCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

 it('should follow the rigth path', function () {
    expect(tester.path()).to.equal("/queen");
  });

 it('should modify the title', function () {
    expect(Page.title()).to.equal("Queen");
  });

  it('should modify the description', function () {
    expect(Page.description).to.equal("Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa.");
  });

  it('should modify the key words', function () {
    expect(Page.keyWords).to.equal("queen,rock,londres,mercury");
  });

});
