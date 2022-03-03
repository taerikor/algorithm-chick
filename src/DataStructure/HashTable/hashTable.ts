const hash = (key:string, max:number) => {
    let hash = 0;
    for(let i = 0; i < key.length; i++){
        hash += key.charCodeAt(i);
    }
    return hash % max
}

class HashTable {
    private storage: any[];
    private storageLimit: number;
    constructor(limit: number){
        this.storage = [];
        this.storageLimit = limit
    }
    print(){
        return console.log(this.storage)
    }
    add(key:string, value:any){
        let index = hash(key, this.storageLimit);
        if(this.storage[index] === undefined ){
            this.storage[index] = [
                [key, value]
            ]
        }else {
            let inserted = false
            for(let i = 0; i < this.storage[index].length; i++){
                if(this.storage[index][i][0] === key){
                    this.storage[index][i][1] = value
                    inserted = true;
                }
            }
            if(!inserted) {
                this.storage[index].push([key, value])
            }

        }
    }

    remove(key:string){
        let index = hash(key, this.storageLimit);
        if(this.storage[index] === undefined){
            return undefined;
        }
        if(this.storage[index].length === 1 && 
           this.storage[index][0][0] === key){
            delete this.storage[index]
        }else{
            for(let i = 0; i < this.storage[index].length; i++){
                if(this.storage[index][i][0] === key){
                    delete this.storage[index][i]
                }
            }
        }
    }


    lookup(key:string){
        let index = hash(key, this.storageLimit);
        if(this.storage[index] === undefined){
            return undefined;
        }else{
            for(let i = 0; i < this.storage[index].length; i++){
                if(this.storage[index][i][0] === key){
                    return this.storage[index][i][1]
                }
            }
        }
    }

}

export default () => {
    console.log(hash('hel', 100))
    let newHash = new HashTable(5)
    newHash.add('hello',1)
    newHash.add('hel',1)
    newHash.add('hlo',1)
    newHash.add('hello',3)
    newHash.remove('hel')
    console.log(newHash.lookup('hello'))
    newHash.print()
}