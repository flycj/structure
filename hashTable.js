function hashTable() {
	//使用 链地址法，处理 hash 数据冲突
	this.storage = [];
	this.count = 0;
	this.limit = 7;

	hashTable.prototype.hashFunction = function(str) {
		let hashCode = 0;
		for(i = 0; i < str.length; i++) {
			hashCode = hashCode * 37 + str.charCodeAt(i)
		}
		return hashCode % this.limit;
	}

	hashTable.prototype.put = function(key, value) {
		let index = this.hashFunction(key);
		let bucket = this.storage[index];
		if (!bucket) {
			this.storage[index] = bucket = [];
		}
		for (i = 0; i < bucket.length; i++) {
			let tuple = bucket[i];
			if (tuple[0] === key) {
				tuple[1] = value;
				return true;
			}
		}
		bucket.push([key, value]);
		this.count += 1;

		if (this.count > this.limit * 0.75) {
			this.resize(this.getPrime(this.limit * 2))
		}
		return true;
	}

	hashTable.prototype.get = function(key) {
		let index = this.hashFunction(key);
		let bucket = this.storage[index];
		if (!bucket || !bucket.length) return null;
		for (i = 0; i < bucket.length; i++) {
			let tuple = bucket[i];
			if (tuple[0] === key) {
				return tuple[1];
			}
		}
		return null;
	}

	hashTable.prototype.remove = function(key) {
		let index = this.hashFunction(key);
		let bucket = this.storage[index];
		if (!bucket || !bucket.length) return null;
		let i = 0;
		tuple = bucket[i];
		while(tuple && tuple[0] !== key) {
			tuple = bucket[++i];
		}
		if (tuple) {
			bucket.splice(i, 1);
			this.count -=1;

			if (this.limit > 7 && this.count < this.limit * 0.25) {
				this.resize(this.getPrime(Math.floor(this.limit / 2)))
			}


			return tuple[1];
		}
		return null;
	}

	hashTable.prototype.isEmpty = function() {
		return this.count === 0
	}

	hashTable.prototype.size = function() {
		return this.count;
	}

	hashTable.prototype.resize = function(newLimit) {
		let oldStorage = this.storage;
		this.storage = [];
		this.limit = newLimit;
		this.count = 0;

		for (i = 0; i < oldStorage.length; i ++) {
			let bucket = oldStorage[i];
			if (!bucket || !bucket.length) continue;
			for (j = 0; j < bucket.length; j++) {
				let tupple = bucket[j];
				this.put(tupple[0], tupple[1]);
			}
		}
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
