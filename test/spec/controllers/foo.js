'use strict';

describe('Controller: FooCtrl', function () {

  // load the controller's module
  beforeEach(module('projectApp'));

  var FooCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FooCtrl = $controller('FooCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

 it('should follow the rigth path', function () {
    expect(tester.path()).to.equal("/foo");
  });

 it('should modify the title', function () {
    expect(Page.title()).to.equal("Angular Rocks");
  });

  it('should modify the description', function () {
    expect(Page.description).to.equal("Esto es la descripción por defecto.");
  });

  it('should modify the key words', function () {
    expect(Page.keyWords).to.equalgular,rocks,default");
  });

});
