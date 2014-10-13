
function DockingStation() {
	DEFAULT_CAPACITY = 10;
	this.bikes = [];
	this.capacity = arguments[0] || DEFAULT_CAPACITY;
}

DockingStation.prototype.dockBike = function(bike) {
	(this.bikes.length == this.capacity) ? false : this.bikes.push(bike);	
}

DockingStation.prototype.releaseBike = function(bike) {
	if (bike.broken) return false;
	var index = this.bikes.indexOf(bike);
	return index != -1 ? removeBikeFromStation(this.bikes) : false;
	function removeBikeFromStation(bikesInStation) {
		bikesInStation.splice(index,1)
		return bike;
	}
}

DockingStation.prototype.availableBikes = function() {
	return [].filter.call(this.bikes, function(bike) { if (!bike.broken) return bike;})
}

DockingStation.prototype.brokenBikes = function() {
	return [].filter.call(this.bikes, function(bike) { if (bike.broken) return bike;})
}

