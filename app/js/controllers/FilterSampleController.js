'use strict';

eventsApp.controller('FilterSampleController',
	function FilterSampleController($scope, $filter) {
		$scope.data = {};

		var durations = $filter('durations');
		$scope.data.duration1 = durations(1);
		$scope.data.duration2 = durations(2);
		$scope.data.duration3 = durations(3);
		$scope.data.duration4 = durations(4);

	});

/*
Don't have to use the $filter service like above, instead you can name the filter whatever then add the keyword "Filter" to the end.

eventsApp.controller('FilterSampleController',
	function FilterSampleController($scope, durationFilter) {
		$scope.data = {};

		$scope.data.duration1 = durationFilter(1);
		$scope.data.duration2 = durationFilter(2);
		$scope.data.duration3 = durationFilter(3);
		$scope.data.duration4 = durationFilter(4);

	});

*/