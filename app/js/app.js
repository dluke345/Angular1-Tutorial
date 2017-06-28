'use strict';

//to use the CookiesStoreSample -- var eventsApp = angular.module('eventsApp', ['ngResource', 'ngCookies'])
var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider.when('/newEvent',
		{
			templateUrl: 'templates/NewEvent.html',
			controller: 'EditEventController'
		});
		$routeProvider.when('/events', 
		{
			templateUrl: 'templates/EventList.html',
			controller: 'EventListController'
			// resolve: {
			// 	event: function($route, eventData) {
			// 		return eventData.getEvent($route.current.pathParams.eventId).$promise;
			// 	}
			// }			
		});
		$routeProvider.when('/sampleDirective',
		{
			templateUrl: 'templates/SampleDirective.html',
			controller: 'SampleDirectiveController'
		});
		$routeProvider.when('/directiveControllerSample',
			{
				templateUrl: 'templates/DirectiveControllerSample.html'
			});
		$routeProvider.when('/editProfile',
		{
			templateUrl: 'templates/EditProfile.html',
			controller: 'EditProfileController'
		});
		//Can use template: '' and just pass in a string or possibly a service
		$routeProvider.when('/magic',
		{
			template: 'You wanna see some magic?'
		});
		//Routing each event to it's specific json data
		$routeProvider.when('/event/:eventId', 
		{
			templateUrl: 'templates/EventDetails.html',
			controller: 'EventController',

			//Use resolve $promise to not show content until all data is fully loaded, won't get partially rendered pages
			resolve: {
				event: function($route, eventData) {
					return eventData.getEvent($route.current.pathParams.eventId).$promise;
				}
			}			
		});

		//otherwise keyword will route any bogus input in URL to this page
		$routeProvider.otherwise({redirectTo: '/events'});

		//Enabling HTML5 routing to get rid of hash in URL
		$locationProvider.html5Mode(true);
});


/*	.factory('myCache', function($cacheFactory)
	{
		return $cacheFactory('myCache', {capacity:3});
	});
*/