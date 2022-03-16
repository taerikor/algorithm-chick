interface INodesLen {
    [index: number]: number;
}
const bfs = (graph:number[][], root:number): INodesLen => {
    let nodesLen:INodesLen = {}
    for(let i = 0; i < graph.length; i++ ){
        nodesLen[i] = Infinity;
    }
    nodesLen[root] = 0;
    let queue = [root]
    let current: number;
    while(queue.length != 0){
        current = queue.shift()
        
        let currentConnected = graph[current];
        let neighborIndex:number[] = [];
        let index = currentConnected.indexOf(1)
        while(index !== -1){
            neighborIndex.push(index);
            index = currentConnected.indexOf(1, index + 1);
        }
        for(let j = 0; j < neighborIndex.length; j++){
            if(nodesLen[neighborIndex[j]] === Infinity){
                nodesLen[neighborIndex[j]] = nodesLen[current] + 1;
                queue.push(neighborIndex[j])
            }
        }
    }
    return nodesLen;
}

export default () => {
    let exGraph = [
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0]
    ]

    console.log( bfs(exGraph, 3) )
}