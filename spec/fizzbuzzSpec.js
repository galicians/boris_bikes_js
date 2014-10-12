

describe("fizzbuzz", function() {

	it("knows when a number is divisible by 3", function() {
		expect(divisibleByThree(9)).toBeTruthy(); 
	});

	it("knows when a number is divisible by 5", function() {
		expect(divisibleByFive(15)).toBeTruthy();
	});

	it("knows when a number is divisible by 15", function() {
		expect(divisibleByFifteen(15)).toBeTruthy();
	});

	it("knows when it has to say fizz", function() {
		expect(fizzbuzz(3)).toMatch("fizz");
	});

	it("knows when it has to say buzz", function() {
		expect(fizzbuzz(5)).toMatch('buzz');
	});

	it("knows when it has to say fizzbuzz", function() {
		expect(fizzbuzz(15)).toMatch('fizzbuzz');
	});

	it("knows when it has to return the number", function() {
		expect(fizzbuzz(7)).toEqual(7);
	});

});