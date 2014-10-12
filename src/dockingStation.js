
function DockingStation() {
	this.bikes = [];
}

DockingStation.prototype.dockBike = function(bike) {
	this.bikes.push(bike);
}

// DockingStation.prototype.releaseBike = function(bike) {
// 	var bikeToRelease = [];
// 	for (var index in this.bikes) {
// 		if (this.bikes[index] == bike) {
// 			bikeToRelease.push[bike];
// 		}
// 	}
// 	this.bikes

// }

// DockingStation.prototype.releaseBike = function(bike) {
// 	var index = this.bikes.indexOf(bike);
// 	index == -1 ? return false : removeBike
// 	function removeBike(bike) {
// 		this.bikes.slice(index, 1);
// 		return bike;
// 	} 
// }