function Set() {
	this.items = {};

	Set.prototype.add = function(value) {
		if (this.has(value)) return false;
		this.items[value] = value;
		return true;
	}
	Set.prototype.remove = function(value) {
		if (!this.has(value))  return false;
		delete this.items[value];
	}
	Set.prototype.has = function() {
		return this.items.hasOwnProperty(value);
	}
	Set.prototype.clear = function() {
		this.items = {};
	}
	Set.prototype.size = function() {
		return Object.keys(this.items).length;
	}
	Set.prototype.values = function() {
		return Object.values(this.items);
	}
	Set.prototype.union = function(newSet) {
		if (! newSet instanceof Set) return null;
		var unionSet = new Set();

		var values = this.values();

		for (var i = 0; i < values.length; i++) {
			unionSet.add(values[i]);
		}

		values = newSet.values();

		for(var i =0; i< values.length; i++) {
			unionSet.add(values[i]);
		}
		return unionSet;
	}
	Set.prototype.intersection = function(newSet) {
		var intersectionSet = new Set();
		var values = this.values();
		for(var i = 0; i < values.length; i ++) {
			if (newSet.has(values[i])) {
				intersectionSet.add(values[i]);
			}
		}
		return intersectionSet;
	}
	Set.prototype.difference = function(otherSet) {
		var differenceSet = new Set();
		var values = this.values();
		for(var i = 0; i < values.length; i ++) {
			if (!newSet.has(values[i])) {
				differenceSet.add(values[i]);
			}
		}
		return differenceSet;
	}
	Set.prototype.subset = function(otherSet) {
		var values = this.values();
		for(var i = 0; i < values.length; i ++) {
			if (!newSet.has(values[i])) return false;
		}
		return true;
	}
}
