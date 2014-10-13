
describe("docking station", function() {

	var station;
	var bike;

	beforeEach(function() {
		station = new DockingStation;
		bike = new Bike;
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
	});

	it("should provide a list of available bikes", function() {
		station.dockBike(bike);
		bikeBroken = new Bike;
		bikeBroken.toHaveAccident();
		station.dockBike(bikeBroken);
		expect(station.availableBikes()).toEqual([bike]);
	});

	it("should provide a list of broken bikes", function() {
		station.dockBike(bike);
		bikeBroken = new Bike;
		bikeBroken.toHaveAccident();
		station.dockBike(bikeBroken);
		expect(station.brokenBikes()).toEqual([bikeBroken]);
	});

});