'use-strict'

describe('myCalendar', function() {

  var scope,
      element,
      html;


  beforeEach(module('calendarDemoApp'));
  beforeEach(module('app/mycalendar.html'));
  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();
    html = '<my-calendar class="calendar-container"></my-calendar>';
    compiled = $compile(html);
    element = compiled(scope);
    scope.$digest();

  }));


  it('should render a nav in my-calendar', function() {
    console.log(angular.element("my-calendar"));
    expect(element.find('nav').length).toBe(1);
  });

});
