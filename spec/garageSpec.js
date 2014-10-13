describe("garage", function() {

	beforeEach(function() {
		garage = new Garage;
		bike = new Bike;
	});

	function addTwoBikes() {

	}

	it("should have 30 as default capacity when initialized", function() {
		expect(garage.capacity).toEqual(30);
	});

	it("will have a different capacity when provided", function() {
		bigGarage = new Garage(100)
		expect(bigGarage.capacity).toEqual(100);
	});

	it("should be empty when initialized", function() {
		expect(garage.bikes.length).toEqual(0)
	});

	it("should release a bike", function() {
		// garage.dockBike(Bike);
		// expect(garage)
	});
});