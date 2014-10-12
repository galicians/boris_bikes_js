function Bike() {
	this.broken = false;
}

Bike.prototype.toHaveAccident = function() {
	this.broken = true;
}

Bike.prototype.toBeFixed = function () {
	this.broken = true;
}