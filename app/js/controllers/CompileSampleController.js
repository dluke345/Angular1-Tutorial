'use strict';

eventsApp.controller('CompileSampleController',
	function CompileSampleController($scope, $compile, $parse) {

		//Parse Service, mostly used in directives
		var fn = $parse('1 + 2');
		console.log(fn());

		//Getter which uses the parse service to pull in hard coded data below
		var getter = $parse('event.name');

		var context1 = {event: {name: 'AngularJS Parse Service'}};
		var context2 = {event: {name: 'Code Camp'}};

		console.log(getter(context1));
		console.log(getter(context2));

		console.log(getter(context2, context1));

		//Setter which can be used to assign a value to a context that is pulled in
		var setter = getter.assign;
		setter(context2, 'Code Retreat');

		console.log(context2.event.name);

		//Compile Service
		$scope.appendDivToElement = function(markup) {
			return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
		}
	}
);