'use strict';

eventsApp.directive('upvote' ,function() {
	return {
		restrict: 'E',
		templateUrl: '/templates/directives/upvote.html',
		//Using @ like count: "@" would into the string we have on the eventDetails.html, unless we use the angular bindings on the count property
		//on the EventDetails page.
		//Using the & prefix is how you bind a local scope property to a function you want to execute in the parent scope.
		scope: {
			upvote: "&",
			downvote: "&",
			count: "="
		}
	}
});