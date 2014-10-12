function Bike() {
	this.broken = false;
}

Bike.prototype.toHaveAccident = function() {
	return this.broken = true;
}

Bike.prototype.toBeFixed = function () {
	return this.broken = true;
}