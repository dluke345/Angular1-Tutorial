'use strict';

eventsApp.directive('greeting', function() {
   return {
       restrict: 'E',
       replace: true,
       //priority: -1,
       //Used when nesting directives, embedding HTML inside directive
       transclude: true,
       template: "<div><button class='btn' ng-click='sayHello()'>Say Hello</button><div ng-transclude></div></div>",
       controller: function($scope) {
           var greetings = ['Hello'];
           $scope.sayHello = function() {
               alert(greetings.join());
           }
           this.addGreeting = function(greeting) {
               greetings.push(greeting);
           }
       }
   } ;
})
.directive('finnish', function() {
    return {
        restrict: 'A',
        //The require property allows you to use a controller from another directive
        //The carrot ^ in require before the controller name allows this directive not to be on the same element as the controller
        require: '^greeting',
        //priority: -1,
        //The terminal property set to true will make any priority levels lower than the directive it is in not execute
        //You also have to use negative numbers for this to work or nothing will execute.
        //terminal: true,
        link: function(scope, element, attrs, controller) {
            controller.addGreeting('hei');
        }
    }
})
.directive('hindi', function() {
    return {
        restrict: 'A',
        //priority: -2,
        require: '^greeting',
        link: function(scope, element, attrs, controller) {
            controller.addGreeting('नमस्ते');
        }
    }
});