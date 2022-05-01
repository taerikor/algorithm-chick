export default () => {
    function solution(n, k, card){
        let answer=new Set();
        for(let i = 0; i < n; i++){
            for(let j = i+1; j < n; j++){
                for(let s = j+1; s < n; s++){
                    answer.add(card[i]+card[j]+card[s])
                } 
            }
        }

        return [...answer].sort((a:number,b:number) => b-a)[k-1];
    }
    
    let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
    console.log(solution(10, 3, arr));
}