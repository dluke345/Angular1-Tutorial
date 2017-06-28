'use strict';

eventsApp.directive('eventThumbnail' ,function() {
	return {
		restrict: 'E',
		//Replaces the div with the actual content from the templateUrl
		replace: 'true',
		templateUrl: '/templates/directives/eventThumbnail.html',
		//Isolating scope for each directive on the page
		scope: {
			event: "=event"
		}
	}
});