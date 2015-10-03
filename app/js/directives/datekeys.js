'use strict';

eventsApp.directive('dateKeys', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs, contoller) {
			element.on('keydown', function(event) {
				if (isNumericKeyCode(event.keyCode) || isForwardSlashKeyCode(event.keyCode) || isNavigationKeyCode(event.keyCode)) {
					return true;
				}
				//alert(event.keyCode);
				return false;
			});
		}

	}

	function isNumericKeyCode(keyCode) {
		return (event.keyCode >= 48 && event.keyCode <= 57)
			|| (event.keyCode >= 96 && event.keyCode <= 105);
	}
	function isForwardSlashKeyCode(keyCode) {
		return (event.keyCode === 191) || (event.keyCode === 111);
	}
	function isNavigationKeyCode(keyCode){
		switch (keyCode) {
			case 8: //backspace
			case 35: //end
			case 36: //home
			case 37: //left
			case 38: //up
			case 39: //right
			case 40: //down
			case 41: //ins
			case 46: //del
				return true;
			default:
				return false;
		}
	}

});
