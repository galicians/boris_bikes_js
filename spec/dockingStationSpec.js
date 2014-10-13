
describe("docking station", function() {

	var station;
	var bike;

	beforeEach(function() {
		station = new DockingStation;
		bike = new Bike;
	});

	function addTwoBikes() {
		station.dockBike(bike);
		bikeBroken = new Bike;
		bikeBroken.toHaveAccident();
		station.dockBike(bikeBroken);
	}

	it("should have 10 as default capacity", function() {
		expect(station.capacity).toEqual(10);
	});

	it("will have a different capacity when provided", function() {
		station = new DockingStation(25)
		expect(station.capacity).toEqual(25)
	});

	it("should be empty when initialized", function() {
		expect(station.bikes.length).toEqual(0);
	});
	
	it("should dock a bike", function() {
		station.dockBike(bike);
		expect(station.bikes.length).toEqual(1);
	});

	it("should release a bike", function() {
		station.dockBike(bike);
		expect(station.releaseBike(bike)).toEqual(bike);
		expect(station.bikes.length).toEqual(0)
	});

	it("should provide a list of available bikes", function() {
		addTwoBikes();
		expect(station.availableBikes()).toEqual([bike]);
	});

	it("should provide a list of broken bikes", function() {
		addTwoBikes();
		expect(station.brokenBikes()).toEqual([bikeBroken]);
	});

	it ("should return false when trying to release a broken bike", function() {
		addTwoBikes();
		expect(station.releaseBike(bikeBroken)).toBeFalsy();
	});


});