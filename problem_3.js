var largestPrimeFactor = function(input) {
	var factor = 0
	for(var i = 1; i < input; i ++){
		if (input % i === 0){
			var prime = 0;
			for(var j = 2; j < i; j ++){
				if (i % j === 0){
					prime += 1;
				} else {
					prime += 0;
				}
			}
			if (prime === 0){
			factor = i;
		}
		}
	}
	console.log(factor)
}

largestPrimeFactor(1000)