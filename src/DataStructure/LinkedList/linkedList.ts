class ListNode {
    public element: any;
    public next: any;
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    private length: number;
    private head: ListNode | null;
    constructor(){
        this.length = 0;
        this.head = null;
    }

    size(){
        return this.length
    }

    getHead(){
        return this.head
    }

    isEmpty(){
        return this.length === 0
    }

    add(element:any){
        let node = new ListNode(element)
        if(this.head === null){
            this.head = node
        }else{
            let currentNode = this.head
            while(currentNode.next !== null){
                currentNode = currentNode.next
            }
            currentNode.next = node;

        }
        this.length++
    }

    remove(element:any){
        let currentNode = this.head;
        let previousNode;
        if(currentNode.element === element){
            this.head = currentNode.next
        }else{
            while(currentNode.element !== element){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;

        }
        this.length--
    }

    indexOf(element:any){
        let currentNode = this.head;
        let index = -1;
        while(currentNode){
            index++
            if(currentNode.element === element){
                return index
            }
            currentNode = currentNode.next
        }
        return -1
        
    }
    elementAt(index:number){
        let currentNode = this.head;
        let counter = 0;
        while(counter < index){
            currentNode = currentNode.next
            counter++
        }
        return currentNode.element
    }

    addAt(index:number, element:any){
        let node = new ListNode(element)
        let currentNode = this.head;
        let currentIndex = 0;
        let previousNode;
        if(index >= this.length){
            return false
        }
        if(index === 0){
            node.next = currentNode;
            this.head = node;
        }else{
            while(currentIndex !== index){
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        this.length++

    }
    removeAt(index:number){
        let currentNode = this.head;
        let currentIndex = 0;
        let previousNode;
        if(index >= this.length || index < 0){
            return false
        }
        if(index === 0){
            this.head = currentNode.next
        }else{
            while(currentIndex !== index){
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++
            }
            previousNode.next = currentNode.next
        }
        this.length--
        return currentNode.element
    }
}

export default ()=> {
    let newList = new LinkedList()
    newList.add(3)
    newList.add(4)
    newList.add(5)
    // newList.remove(4)
    newList.addAt(2, 10)
    newList.removeAt(0)
    // console.log(newList.indexOf(3))
    // console.log(newList.elementAt(1))
    console.log(newList.getHead())
}