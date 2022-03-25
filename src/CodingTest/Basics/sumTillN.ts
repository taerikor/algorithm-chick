//1부터 자연수 N까지의 합
export default () => {
    function solution(n){
        let answer = 0;
        for(let i= 1; i < n + 1; i++ ){
            answer+=i
        }
        return answer;
    }

    console.log(solution(10));
}