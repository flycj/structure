function DoubleLinkedList() {
	this.head = null;
	this.tail = null;
	this.length = 0;
	function Node(data) {
		this.next = null;
		this.prev = null;
		this.data = data;
	}
	DoubleLinkedList.prototype.append = function(data) {
		let newNode = new Node(data);
		if (this.length === 0) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length += 1;
	}
	DoubleLinkedList.prototype.insert = function(position, data) {
		if (position < 0 || position > this.length) return false;
		let newNode = new Node(data);
		if (this.length === 0) {
			newNode.next = this.head.next;
			this.head = newNode;
			this.tail = newNode;
		} else if (this.position === 0) {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		} else if (this.position === this.length) {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		} else {
			let index = 0;
			let current = this.head;

			while(index ++ < position) {
				current = current.next;
			}

			newNode.next = current;
			newNode.prev = current.prev;
			current.prev.next = newNode;
			current.prev = newNode;
		}
		this.length += 1;
		return true;
	}
	DoubleLinkedList.prototype.get = function(position) {
		if (position < 0 || position >= this.length) return null;
		let index;
		let current;
		if (position < this.length / 2) {
			index = 0
			current = this.head;
			while(index ++ < position) {
				current = current.next;
			}
		} else {
			index = this.length - 1;
			current = this.tail;
			while(index-- > position) {
				current = current.prev;
			}
		}
		return current.data;
	}
	DoubleLinkedList.prototype.indexOf = function(data) {
		let current = this.head;
		let index = 0;
		while(current) {
			if (current.data === data) return index;
			current = current.next
			index += 1;
		}
		return -1;
	}
	DoubleLinkedList.prototype.update = function(position, data) {
		if (position < 0 || position >= this.length) return false;
		let index;
		let current;
		if (position < this.length / 2) {
			index = 0
			current = this.head;
			while(index ++ < position) {
				current = current.next;
			}
		} else {
			index = this.length - 1;
			current = this.tail;
			while(index-- > position) {
				current = current.prev;
			}
		}
		current.data = data;
		return true;
	}
	DoubleLinkedList.prototype.removeAt = function(position) {
		if (position < 0 || position >= this.length) return null;
		let current = null;
		if (this.length === 1) {
			current = this.head;
			this.head = null;
			this.tail = null;
		} else if (position === 0) {
			current = this.head;
			this.head.next.prev = null;
			this.head = this.head.next;
		} else if (position === this.length - 1) {
			current = this.tail;
			this.tail.prev.next = null;
			this.tail = this.tail.prev;
		} else {
			current = this.get(position);
			current.prev.next = current.next;
			current.next.prev = current.prev;
			current.prev = null;
			current.next = null;
		}
		this.length -= 1;
		return current.data;
	}
	DoubleLinkedList.prototype.remove = function(data) {
		let position = this.indexOf(data);
		return this.removeAt(position);
	}
	DoubleLinkedList.prototype.isEmpty = function() {
		return this.length === 0
	}
	DoubleLinkedList.prototype.size = function() {
		return this.length;
	}
	DoubleLinkedList.prototype.toString = function() {
		return this.backwordString();
	}
	//返回正向遍历的节点字符串形式
	DoubleLinkedList.prototype.forwardString = function() {
		let resultString = '';
		current = this.tail;
		while(current) {
			resultString += current.data + ' ';
			current = current.prev;
		}
		return resultString;
	}
	//返回反向遍历的节点字符串形式
	DoubleLinkedList.prototype.backwordString = function() {
		let resultString = '';
		current = this.head;
		while(current) {
			resultString += current.data + ' ';
			current = current.next;
		}
		return resultString;
	}
}
