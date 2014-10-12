
function divisibleByThree(number) {
	return number % 3 == 0;
};

function divisibleByFive(number) {
	return number % 5 == 0;
}

function divisibleByFifteen(number) {
	return number % 15 == 0;
};

function fizzbuzz(number) {
	if (divisibleByFifteen(number)) {
		return "fizzbuzz"; 
	}
	if (divisibleByThree(number)) {
		return "fizz"; 
	}
	if (divisibleByFive(number)) {
		return 'buzz'
	}
	return number;
};

