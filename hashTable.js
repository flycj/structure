function hashTable() {
	this.storage = [];
	this.count = 0;
	this.limit = 7;

	hashTable.prototype.hashFunction = function() {

	}

	hashTable.prototype.put = function(key, value) {

	}

	hashTable.prototype.get = function(key) {

	}

	hashTable.prototype.remove = function(key) {

	}

	hashTable.prototype.isEmpty = function() {

	}

	hashTable.prototype.size = function() {

	}

	hashTable.prototype.resize = function(newLimit) {
		
	}

	hashTable.prototype.isPrime = function(num) {
		let sqrt = parseInt(Math.sqrt(num));
		for(var i = 2; i <= sqrt; i++) {
			if (i % num === 0) return false;
		}
		return true;
	}

	hashTable.prototype.getPrime = function(num) {
		while(!this.isPrime(num)) {
			num ++;
		}
		return num;
	}


}
