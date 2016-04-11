$(document).ready( function () {
	
	$('button').on('click', function () {
		var inputField = $('.user-number')
		var userValue = parseInt(inputField.val());
	
	if ( isNaN(userValue) )	{
		alert('Please input a number');
	}
	else {
		console.log(fizz(userValue));
	}
		inputField.val("");
		return false;
	})
	
});


function fizz (userValue) {
	for(var i = 1; i <= userValue; i++) {
		var x = i;
		if (i % 5 == 0 && i % 3 == 0)
			x = "FizzBuzz"
		else if (i % 3 == 0) 
			x = "Fizz"
		else if (i % 5 == 0)
			x = "Buzz"
			console.log(x);
	};
};


