export default () => {
    function solution(test){
        let answer=0;
        // let m = test.length;
        // let n = test[0].length;
        // for(let i = 1; i <= n; i++ ){
        //     for(let j = 1; j <= n; j++){
        //         if(i === j)continue;
        //         let cnt = 0;
        //         for(let k = 0; k < m; k++){
        //             let pi = 0;
        //             let pj = 0;
        //             for(let s = 0; s < n; s++){
        //                 if(test[k][s] === i) pi = s
        //                 if(test[k][s] === j) pj = s
        //             }
        //             if(pi < pj) cnt++
        //         }
        //         if(cnt === m){
        //             answer++;
        //             console.log(i,j)
        //         } 
        //     }
        // }
        let numArr = Array.from({length: test[0].length}, () => []);
        test.forEach((arr:number[]) => {
            for(let i = 0; i < arr.length; i++){
                for(let j = i+1; j < arr.length; j++){
                    numArr[arr[i]-1][arr[j]-1] === undefined ? 
                    numArr[arr[i]-1][arr[j]-1] = 1 : 
                    numArr[arr[i]-1][arr[j]-1]++
                    if(numArr[arr[i]-1][arr[j]-1] === test.length){
                        answer++
                        console.log(arr[i],arr[j])
                    }
                }
            }
        })
        return answer;
    }
    
    let arr=[[3, 4, 1, 5, 2], [5, 4, 3, 2, 1], [3, 5, 1, 4, 2], [1, 5, 4, 3, 2]];
    console.log(solution(arr));
}