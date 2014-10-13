function Garage() {
	DEFAULT_CAPACITY = 30;
	this.capacity = arguments[0] || DEFAULT_CAPACITY;
	this.bikes = [];
}

Garage.prototype.dockBike = function(bike) {
	this.capacity == this.bikes.length ? false : this.bikes.push(bike);
};

Garage.prototype.releaseBike = function(bike) {
	if (bike.broken) return false;
	var index = this.bikes.indexOf(bike)
	index == -1 ? false : removeBikeFromGarage(this.bikes)
	function removeBikeFromGarage(existingBikes) {
		existingBikes.splice(index,1)
		return bike
	}
}

Garage.prototype.releaseBike = function(bike) {
	[].map
}