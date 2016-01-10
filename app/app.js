angular.module('calendarDemoApp', [])
  .controller('mainCtrl', function($scope) {
    console.log(CalendarRange.getMonthlyRange(new Date()));
    console.log(CalendarRange.prepareDate(new Date()));

    $scope.date = CalendarRange.getMonthlyRange(new Date());


  });

// your controller and directive code go here
