export default () => {
    function solution(k, arr){
        let answer = Number.MIN_SAFE_INTEGER;
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
            if(i >= k){
                sum -= arr[i - k];
            }
            if(answer < sum) answer = sum;
        }
        return answer;
    }
    
    let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
    console.log(solution(3, a));
}


        // let answer=Number.MIN_SAFE_INTEGER;
        // let initialArr = Array.from({length: arr.length},() => 0);
        // for(let i = 0; i < arr.length; i++){
        //     let j = i;
        //     while(j >= 0 && j > i - k){
        //         initialArr[j] += arr[i]
        //         j--;
        //     }
        //     if((i - k -1) >= 0){
        //         if(answer < initialArr[i - k - 1]){
        //             answer = initialArr[i - k - 1]
        //         }
                
        //     }
        // }
        // return answer;