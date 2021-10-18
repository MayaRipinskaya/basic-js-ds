const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {

    constructor() {
        this.top = null
    }
    root() {
        // throw new NotImplementedError('Not implemented');
        return this.top
    }

    add(data) {
        // throw new NotImplementedError('Not implemented');
        this.top = addWithin(this.top, data)

        function addWithin(node, data) {
            if (!node) {
                return new Node(data)
            }
            if (node.data === data) {
                return node
            }
            if (data < node.data) {
                node.left = addWithin(node.left, data)
            } else {
                node.rigth = addWithin(node.rigth, data)
            }
            return node
        }
    }

    has(data) {
        // throw new NotImplementedError('Not implemented');
        return searchWithin(this.top, data)

        function searchWithin(node, data) {
            if (!node) {
                return false
            }
            if (node.data === data) {
                return true
            }
            return data < node.data ? searchWithin(node.left, data) :
                searchWithin(node.rigth, data)
        }
    }

    find(data) {
        // throw new NotImplementedError('Not implemented');
        return searchData(this.top, data)

        function searchData(node, data) {
            if (!node) {
                return null
            }
            if (node.data === data) {
                return node
            }
            if (data < node.data) {
                return searchData(node.left, data)
            } else {
                return searchData(node.rigth, data)
            }
        }


    }

    remove(data) {
        // throw new NotImplementedError('Not implemented');
        this.top = removeNode(this.top, data)

        function removeNode(node, data) {
            if (!node) {
                return null
            }
            if (data < node.data) {
                node.left = removeNode(node.left, data)
                return node
            } else if (data > node.data) {
                node.rigth = removeNode(node.rigth, data)
                return node
            } else {
                if (!node.left && !node.rigth) {
                    return null
                }
                if (!node.left) {
                    node = node.rigth
                    return node
                }
                if (!node.rigth) {
                    node = node.left
                    return node
                }

                let minFromRIghth = node.rigth
                while (minFromRIghth.left) {
                    minFromRIghth = minFromRIghth.left
                }
                node.data = minFromRIghth.data
                node.rigth = removeNode(node.rigth, minFromRIghth.data)
                return node
            }
        }
    }

    min() {
        // throw new NotImplementedError('Not implemented');
        if (!this.top) {
            return
        }
        let node = this.top
        while (node.left) {
            node = node.left
        }
        return node.data
    }

    max() {
        // throw new NotImplementedError('Not implemented');
        if (!this.top) {
            return
        }
        let node = this.top
        while (node.rigth) {
            node = node.rigth
        }
        return node.data
    }

}