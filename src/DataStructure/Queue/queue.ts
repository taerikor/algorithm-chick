class Queue {
    private collection: any[];
    private count: number;
    constructor(){
        this.collection = []
        this.count = 0
    } 
    
    enqueue(value:any){
        this.collection[this.count] = value
        this.count++
    }
    dequeue(){
        let result = this.collection[0]
        for(let i = 0; i < this.count; i++){
            this.collection[i] = this.collection[i+1]
        }
        delete this.collection[this.count-1]
        this.count--
        return result
    }
    
    front(){
        return this.collection[0]
    }

    rear(){
        return this.collection[this.count-1]
    }
}

export default () => {
    console.info('queue')
    let newQueue = new Queue()
    newQueue.enqueue(1)
    newQueue.enqueue(2)
    newQueue.enqueue(3)
    console.log(newQueue.dequeue())
    console.log(newQueue.front())
    console.log(newQueue.rear())
}