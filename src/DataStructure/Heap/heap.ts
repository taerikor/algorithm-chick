class MinHeap{
    private heap: number[];
    constructor(){
        this.heap = [null]
    }

    print(){
        return this.heap
    }
    
    add(num:number){
        this.heap.push(num)
        if(this.heap.length > 2){
            let index = this.heap.length - 1
            while(this.heap[index] < this.heap[Math.floor(index / 2)] ){
                if(index >= 1){
                    [this.heap[Math.floor(index / 2)], this.heap[index]] = [this.heap[index], this.heap[Math.floor(index / 2)]]
                    index = Math.floor(index / 2);
                    if(index <= 1){
                        break;
                    }
                }
            }
        }
    }

    remove(){
        let smallest = this.heap[1]
        if(this.heap.length > 2){
            this.heap[1] = this.heap[this.heap.length - 1]
            this.heap.splice(this.heap.length - 1)
            if(this.heap.length === 3){
                if(this.heap[1] > this.heap[2]){
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
                }
                return smallest;
            }

            let index = 1;
            let left = index * 2;
            let right = index * 2 + 1;

            while(this.heap[index] > this.heap[left] || this.heap[index] > this.heap[right]){
                if(this.heap[left] < this.heap[right]){
                    [this.heap[index], this.heap[left]] = [this.heap[left], this.heap[index]]
                    index = index * 2;
                }else{
                    [this.heap[index], this.heap[right]] = [this.heap[right], this.heap[index]]
                    index = index * 2 + 1;
                }
                left = index * 2;
                right = index * 2 + 1;
                if( this.heap[left] === undefined|| this.heap[right] === undefined){
                    break;
                }
            }
        }else if(this.heap.length === 2 ){
            this.heap.splice(1,1);
        }else{
            return null;
        }
        return smallest;
    }
}

export default () => {
    let myMinHeap = new MinHeap()
    myMinHeap.add(5)
    myMinHeap.add(7)
    myMinHeap.remove()
    myMinHeap.add(2)
    myMinHeap.add(3)
    myMinHeap.remove()
    console.log(myMinHeap.print())
}