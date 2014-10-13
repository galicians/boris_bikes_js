

describe("bike", function() {
	var bike;

	beforeEach(function() {
		bike = new Bike;
	});

	it("when initialized should be working", function() {
		expect(bike.broken).toBeFalsy();
	});

	it("should be able to break", function() {
		bike.toHaveAccident();
		expect(bike.broken).toBeTruthy();
	});

	it("after is broken, it can be fixed", function() {
		bike.toHaveAccident();
		bike.toBeFixed();
		expect(bike.broken).toBeFalsy();
	});


});