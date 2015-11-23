var evenFibs = function(input){

	var sum = 0
	var prev = 1;
	var current = 1;
	var fibonacci = 1

	while(fibonacci <= input){
			if (fibonacci % 2 === 0){
				sum += fibonacci;
			}
		
		current = fibonacci;
		fibonacci = (current + prev);
		prev = current;
	}
	console.log(sum)
}

evenFibs(4000000)