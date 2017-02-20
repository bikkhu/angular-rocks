'use strict';

describe('Controller: TheRollingStonesCtrl', function () {

  // load the controller's module
  beforeEach(module('projectApp'));

  var TheRollingStonesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TheRollingStonesCtrl = $controller('TheRollingStonesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

 it('should follow the rigth path', function () {
    expect(tester.path()).to.equal("/the-rolling-stones");
  });

 it('should modify the title', function () {
    expect(Page.title()).to.equal("The Rolling Stones");
  });

  it('should modify the description', function () {
    expect(Page.description).to.equal("Esto es la descripción por defecto.");
  });

  it('should modify the key words', function () {
    expect(Page.keyWords).to.equal("angular,rocks,default");
  });

});
