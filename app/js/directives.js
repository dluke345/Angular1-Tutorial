'use strict';

eventsApp.directive('mySample', function($compile) {
	return {
		//Restrict is by default A for attribute, changing this to E makes it target an element
		//Can also change this to C, for class. <div class="mySample"></div>
		restrict: 'E',
		template: "<input type='text' ng-model='sampleData' /> {{sampleData}} <br/>"
		//If you are just changing the directive to be just HTML you really don't need this below code, can just use template property
/*		link: function(scope, element, attrs, controller) {
			var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}} <br/>";
			angular.element(element).html($compile(markup)(scope));
		} 
*/
	};
});