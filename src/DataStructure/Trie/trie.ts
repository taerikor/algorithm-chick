class TrieNode {
    public keys: Map<string,TrieNode>;
    private end: boolean;
    constructor(){
        this.keys = new Map();
        this.end = false;
    }
    isEnd(){
        return this.end;
    }
    setEnd(){
        this.end = true;
    }
}

class Trie {
    private root: TrieNode;
    constructor(){
        this.root = new TrieNode;
    }
    
    add(input:string, node = this.root){
        if(input.length === 0){
            node.setEnd()
            return;
        }else if(!node.keys.has(input[0])){
            node.keys.set(input[0], new TrieNode())
            return this.add(input.substring(1), node.keys.get(input[0]))
        }else{
            return this.add(input.substring(1), node.keys.get(input[0]))
        }
    }

    isWord(word:string){
        let node = this.root;
        while(word.length > 1){
            if(!node.keys.has(word[0])){
                return false;
            }else{
                node = node.keys.get(word[0])
                word = word.substring(1)
            }
        }
        return (node.keys.get(word).isEnd() && node.keys.has(word)) ? true : false
    }
    print(){
        let words = [];
        let search = (node:TrieNode, string:string) => {
            if(node.keys.size !== 0 ){
                for(let letter of node.keys.keys()){
                    search(node.keys.get(letter),string.concat(letter))
                }
                if(node.isEnd()){
                    words.push(string)
                }
            }else{
                string.length > 0 ? words.push(string) : undefined;
                return;
            }
        }
        search(this.root, "")
        return words.length > 0 ? words : null;
    }
}

export default () => {
    let myTrie = new Trie()
    myTrie.add('hello')
    myTrie.add('hi')
    myTrie.add('bye')
    myTrie.add('h')
    console.log(myTrie.isWord('hi'))
    console.log(myTrie.print())

    
}