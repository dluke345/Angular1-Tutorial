'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $routeParams, $route) {

       $scope.sortorder = 'name';

       $scope.event = $route.current.locals.event;

       //Using the $routeParams service to each event to 
       //$scope.event = eventData.getEvent($routeParams.eventId);

       //Using the $route service to reload the content on the page
       $scope.reload = function() {
            $route.reload();
       };
 /*        eventData.getEvent()
            .$promise
            .then(function(event) { $scope.event = event; })
            .catch(function(response) { console.log(response); }
        );
*/
        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

//AnchorScroll service
 /*       $scope.scrollToSession = function() {
            $anchorScroll();
        };
*/
    }
);