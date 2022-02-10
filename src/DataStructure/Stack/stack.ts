class Stack {
    private storage : any[];
    private count : number;
    constructor(){
        this.storage = []
        this.count = 0;
    }
    
    peek(){
        return this.storage[this.count -1]
    }
    
    push(value:any){
        this.storage[this.count] = value;
        this.count++
    }
    
    pop(){
        if(this.storage.length === 0){
            return undefined
        }
        this.count--
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result;
    }
}

export default () => {
//     console.info('stack')
// let newStack =  new Stack();
//     newStack.push(1)
//     newStack.push(2)
//     console.log(newStack.peek())
//     newStack.pop()
//     console.log(newStack.peek())
}