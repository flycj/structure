function Dictionary() {
	this.items = {};

	Dictionary.prototype.set = function(key, value) {
		this.items[key] = value;
	}
	Dictionary.prototype.has = function(key) {
		return this.items.hasOwnProperty(key);
	}
	Dictionary.prototype.remove = function(key) {
		if (this.has(key)) {
			delete this.items[key];
		}
		return false;
	}
	Dictionary.prototype.get = function(key) {
		return this.has(key) ? this.items[key] : undefined;
	}
	Dictionary.prototype.keys = function() {
		return Object.keys(this.items);
	}
	Dictionary.prototype.values = function() {
		return Object.values(this.items);
	}
	Dictionary.prototype.size = function() {
		this.items = {};
	}
	Dictionary.prototype.clear = function() {
		this.items = {};
	}
}
