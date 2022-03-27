export default () => {
    function solution(arr:number[]){
        let answer:number[]=[]
        let total = 100;
        for(let i = 0; i < arr.length; i++){
            if(answer.length > 7) break;
            let next = arr[i + 1] === undefined ? 0 : arr[i + 1] 
            let current = arr[i]
            if(total - (current + next) >= 0){
                answer.push(current)
                total -= current
            }
        }

        return answer;
    }
    
    let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
    console.log(solution(arr));
}