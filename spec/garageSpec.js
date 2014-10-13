describe("garage", function() {

	beforeEach(function() {
		garage = new Garage;
		bike = new Bike;
	});

	function addTwoBikes() {
		garage.dock(bike);
		bikeBroken = new Bike
		bikeBroken.toHaveAccident
		garage.dock(bikeBroken)
	}

	it("should have 30 as default capacity when initialized", function() {
		expect(garage.capacity).toEqual(30);
	});

	it("will have a different capacity when provided", function() {
		bigGarage = new Garage(100);
		expect(bigGarage.capacity).toEqual(100);
	});

	it("should be empty when initialized", function() {
		expect(garage.bikes.length).toEqual(0)
	});

	it("should dock a bike", function() {
		garage.dockBike(Bike);
		expect(garage.bikes.length).toEqual(1)
	});

	it("should not dock a bike when full", function() {
		tinyGarage = new Garage(1)
		tinyGarage.dockBike(bike)
		expect(tinyGarage.dockBike(bike)).toBeFalsy();
	});

	it("should release a bike", function() {
		garage.dockBike(bike)
		expect(garage.releaseBike(bike)).toEqual([bike])
		expect(garage.bikes.length).toEqual(0)
	});

	it("should not release a broken bike", function() {
		addTwoBikes()
		expect(garage.releaseBike(bikeBroken)).toBeFalsy()
	});

	it("should provide a list with the available bikes", function() {
		addTwoBikes()
		expect(garage.availableBikes).toEqual([bike])
	});

	
	

});