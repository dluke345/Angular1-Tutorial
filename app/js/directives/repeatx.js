eventsApp.directive('repeatX', function() {
   return {
        /* Using the compile service like this is not efficient, requires the DOM to be traversed.
            Link function runs individually for each directive

        link: function(scope, element, attributes, controller) {
            for(var i=0; i < Number(attributes.repeatX)-1; i++) {
                element.after($compile(element.clone().attr('repeat-x', 0))(scope));
                */

        //When using the compile function you don't have access to the scope because you are only making DOM manipulations
       //Compile function runs once and affects all instances of the directive the same way
        compile: function(element, attributes) {
            for(var i=0; i < Number(attributes.repeatX)-1; i++) {
                element.after(element.clone().attr('repeat-x', 0));
            }
            return function(scope, element, attributes, controller) {
                attributes.$observe('text', function(newValue) {
                    if(newValue === 'Hello World') {
                        element.css('color', 'red');
                    }
                });
            }
        }
   };
});