function LinkedList() {
	function Node(data) {
		this.data = data;
		this.next = null;
	}
	this.head = null;
	this.length = 0;
	LinkedList.prototype.append = function(data) {
		let newNode = new Node(data);
		if (this.length === 0) {
			this.head = newNode;
		} else {
			let current = this.head;
			while(current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.length += 1;
	}
	LinkedList.prototype.insert = function(position, data) {
		if (position < 0 || position > this.length) return false;
		let newNode = new Node(data);
		if (position === 0) {
			newNode.next = this.head;
			this.head = newNode;
		} else {
			let index = 0;
			let current = this.head;
			let previous = null;
			while(index ++ < position) {
				previous = current;
				current = current.next;
			}
			previous.next = newNode;
			newNode.next = current;
		}
		this.length += 1;
		return true;
	}
	LinkedList.prototype.get = function(position) {
		if (position < 0 || position >= this.length) return false;
		let index = 0;
		let current = this.head;

		while(index ++ < position) {
			current = current.next;
		}
		return current.data;
	}
	LinkedList.prototype.indexOf = function(data) {
		var current = this.head;
		var index = 0;
		while(current) {
			if (current.data === data) return index;
			
			current = current.next;
			index += 1;
		}
		return -1;
	}
	LinkedList.prototype.update = function(position, data) {
		if (position < 0 || position >= this.length) return false;
		let current = this.head;
		let index = 0;
		while(index ++ < position) {
			current = current.next;
		}
		current.data = data;
		return true;
	}
	LinkedList.prototype.remove = function(data) {
		var position = this.indexOf(data);

		return this.removeAt(position);
	}
	LinkedList.prototype.removeAt = function(position) {
		if (position < 0 || position >= this.length) return null;
		var current = this.head;
		if (position === 0) {
			this.head = current.next;
		} else {
			let index = 0;
			let previous = null;
			while(index++ < position) {
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}
		this.length -= 1;
		return current.data;
	}
	LinkedList.prototype.isEmpty = function() {
		return this.length === 0;
	}
	LinkedList.prototype.size = function() {
		return this.length;
	}
	LinkedList.prototype.toString = function() {
		let resultString = '';
		let current = this.head;
		while(current) {
			resultString += current.data + ' ';
			current = current.next;
		}
		return resultString;
	}
	
}
var list = new LinkedList();
list.append('asdf');
list.append('asdf1');
list.append('asdf2');
alert(list);
