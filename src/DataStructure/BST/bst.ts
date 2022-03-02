class TreeNode {
    public data: any;
    public left: null | TreeNode
    public right: null | TreeNode
    constructor(data,left=null, right= null){
        this.data = data;
        this.left = left;
        this.right = right
    }
}

class BST {
    public root : null | TreeNode

    constructor(){
        this.root = null;
    }

    add(data){
        let node = this.root
        if(this.root === null){
            this.root = new TreeNode(data)
        }else{
            const searchTree = (node) => {
                if(node.data > data){
                    if(node.left === null ){
                        node.left = new TreeNode(data)
                        return null;
                    }else{
                        return searchTree(node.left)
                    }
                }else if(node.data < data){
                    if(node.right === null ){
                        node.right = new TreeNode(data)
                        return null;
                    }else{
                        return searchTree(node.right)
                    }
                }else {
                    return null
                }
            }
            searchTree(node)
        }
    }

    findMin(){
        let currentNode = this.root
        while(currentNode.left !== null ){
            currentNode = currentNode.left
        }
        return currentNode.data
    }

    findMax(){
        let currentNode = this.root
        while(currentNode.right !== null ){
            currentNode = currentNode.right
        }
        return currentNode.data
    }
    
    remove(data){
        const removeNode = (node:TreeNode, data: any) => {
            if(node === null){
                return null;
            }
            if(node.data === data) {
                //node has no child
                if(node.left === null && node.right === null){
                    return null;
                }
                //node has no left child
                if(node.left === null ){
                    return node.right
                }
                //node has no right child
                if(node.right === null){
                    return node.left
                }
                //node has two children
                let tempNode = node.right;
                while(tempNode.left !== null ){
                    tempNode = tempNode.left
                }
                node.data = tempNode.data
                node.right = removeNode(node.right, tempNode.data)
                return node;
            }else if(node.data < data) {
                node.right = removeNode(node.right, data);
                return node;
            }else {
                node.left = removeNode(node.left, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data)
    }
}

export default () => {
    let bst = new BST()
    bst.add(5)
    bst.add(10)
    bst.add(3)
    bst.add(7)
    bst.add(2)
    bst.remove(10)
    console.log(bst.root)
    console.log(bst.findMin())
    console.log(bst.findMax())
}