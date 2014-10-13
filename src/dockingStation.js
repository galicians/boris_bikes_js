
function DockingStation() {
	this.bikes = [];
}

DockingStation.prototype.dockBike = function(bike) {
	this.bikes.push(bike);
}

DockingStation.prototype.releaseBike = function(bike) {
	var index = this.bikes.indexOf(bike);
	return index != -1 ? removeBikeFromStation(this.bikes) : false;
	function removeBikeFromStation(bikesInStation) {
		bikesInStation.splice(index,1)
		return bike;
	}
}

