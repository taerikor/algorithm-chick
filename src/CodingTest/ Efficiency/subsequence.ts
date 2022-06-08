export default () => {
    function solution(m, arr){
        let answer=0;
        let index=0;
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
            if(sum === m)answer++
            while(sum >= m){
                sum -= arr[index];
                index++;
                if(sum === m)answer++
            }
        }
      
        return answer;
    }
    
    let a=[1, 2, 1, 3, 1, 1, 1, 2];
    console.log(solution(6, a));
}
