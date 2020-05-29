function BinarySearchTree() {
	this.root = null;

	function Node (key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}

	Tree.prototype.insert = function(key) {
		let newNode = new Node(key);
		if (!this.root) {
			this.root = newNode;
		}
	}
	Tree.prototype.insertNode = function(parent, newNode) {

		if (parent.key < newNode.key) {
			if (!parent.left) {
				parent.left = newNode;
			} else {
				this.insertNode(parent.left, newNode);
			}
		} else {
			if (!parent.right) {
				parent.right = newNode;
			} else {
				this.insertNode(parent.right, newNode);
			}
		}
	}
	Tree.prototype.remove = function(key) {
		let node = this.root;
		if (!node) return false;
		let parent = null, isLeftChild = true;

		while(node && node.key !== key) {
			parent = node;
			if (node.key < key) {
				isLeftChild = true;
				node = node.left;
			} else {
				isLeftChild = false;
				node = node.right;
			}
		}
		if (!node) return false;

		if (node.left === null && node.right === null) {
			if (node === this.root) {
				this.root = null;
			} if (isLeftChild) {
				parent.left = null;
			} else {
				parent.right = null;
			}
		} else if (node.left === null) {
			if (node === this.root) {
				this.root = node.right;
			} else if (isLeftChild) {
				parent.left = node.right;
			} else {
				parent.right = node.right;
			}
		} else if (node.right === null) {
			if (node === this.root) {
				this.root = node.left;
			} else if (isLeftChild) {
				parent.left = node.left;
			} else {
				parent.right = node.left;
			}
		} else {
			//获取后继节点
			let successor = this.getSuccessor(node);
			if (node === this.root) {
				this.root = successor;
			} else if (isLeftChild) {
				parent.left = successor;
			} else {
				parent.right = successor;
			}

			successor.left = node.left
		}
	}
	//获取前驱节点
	Tree.prototype.getPrecursor = function(node) {
		let successor = node;
		let current = successor.left;
		while(current) {
			successor = current;
			current = current.right;
		}
		return successor;
	}
	//获取后继节点
	Tree.prototype.getSuccessor = function(node) {
		let successor = node;
		let current = successor.right;
		let successorParent = node;

		while(current) {
			successorParent = successor;
			successor = current;
			current = current.left;
		}
		//此处需 详细测试和思考 ： 如果后继节点有右节点如何处理
		if (successor != node.right) {
			successorParent.left = successor.right;
			successor.right = node.right;
		}
		return successor;
	}
	Tree.prototype.search = function(key) {
		let node = this.root;
		while(node) {
			if (node.key === key) break;
			else if (node.key < key) {
				node = node.left;
			} else {
				node = node.right;
			}
		}
		return node;
	}
	Tree.prototype.min = function() {
		let node = this.root;
		while(node.left) {
			node = node.left;
		}
		return node.key;
	}
	Tree.prototype.max = function() {
		let node = this.root;
		while(node.right) {
			node = node.right;
		}
		return node.key;
	}
	//前序遍历
	Tree.prototype.preOrderTraverse = function(handle) {
		this.preOrderTraverseNode(this.root, handle)
	}
	Tree.prototype.preOrderTraverseNode = function(node, handle) {
		if (node === null) {
			return;
		}
		handle(node.key);
		this.preOrderTraverseNode(node.left, handle);
		this.preOrderTraverseNode(node.right, handle);

	}
	//中序遍历
	Tree.prototype.middleOrderTraverse = function() {
		this.middleOrderTraverseNode(this.root, handle)
	}
	Tree.prototype.middleOrderTraverseNode = function(node, handle) {
		if (node === null) {
			return;
		}
		this.middleOrderTraverseNode(node.left, handle);
		handle(node.key);
		this.middleOrderTraverseNode(node.right, handle);
	}
	//后序遍历
	Tree.prototype.postOrderTraverse = function() {
		this.postOrderTraverseNode(this.root, handle)
	}
	Tree.prototype.postOrderTraverseNode = function(node, handle) {
		if (node === null) {
			return;
		}
		this.postOrderTraverseNode(node.left, handle);
		this.postOrderTraverseNode(node.right, handle);
		handle(node.key);
	}
}
