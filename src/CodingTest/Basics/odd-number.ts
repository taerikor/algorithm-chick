//홀수인 자연수들을 모두 골라 그 합
//홀수들 중 최소값

export default () => {
    function solution(arr:number[]){
        let answer:number[]=[0,Number.MAX_SAFE_INTEGER];
        for(let num of arr){
            if((num % 2) === 1){
                answer[0] += num
                if(answer[1] > num) answer[1] = num;
            }
        }
        
        return answer
    }

    
    let arr=[12, 77, 38, 41, 53, 92, 85];
    console.log(solution(arr));
}