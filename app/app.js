angular.module('calendarDemoApp', [])
  .controller('mainCtrl', function($scope) {
    console.log(CalendarRange.getMonthlyRange(new Date()));
    console.log(CalendarRange.prepareDate(new Date()));


  })
  .directive('myCalendar', function() {
    return {
      restrict : 'E',
      templateUrl : 'mycalendar.html',
      scope : false,
      controller : function($scope, $element, $attrs) {

        $scope.date = CalendarRange.getMonthlyRange(new Date());

        $scope.months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
        $scope.currentDate = CalendarRange.prepareDate(new Date());

        $scope.monthSelected = $scope.months[$scope.currentDate.month];
        $scope.yearSelected = $scope.currentDate.year;
        $scope.currentMonth = $scope.months.indexOf($scope.monthSelected);

        $scope.years = [];

        for (var i = ($scope.yearSelected - 20); i <= ($scope.yearSelected + 20); i++) {
          $scope.years.push(i);
        };

        $scope.dateChange = function(month, year){
          var dateSelected = new Date(month + " " + year);
          console.log(dateSelected);

          $scope.currentMonth = $scope.months.indexOf(month);

          $scope.date = CalendarRange.getMonthlyRange(dateSelected);
          console.log($scope.date);





        };


      },
      link : function(scope, element, attrs) {

      }
    }
  });

// your controller and directive code go here
