function Garage() {
	DEFAULT_CAPACITY = 30;
	this.capacity = arguments[0] || DEFAULT_CAPACITY;
	this.bikes = [];
}