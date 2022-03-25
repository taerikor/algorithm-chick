//7개의 숫자 중 가장 작은 수
export default () => {
    function solution(numbers){
        let answer
        let min = numbers[0]
        for(let i = 1; i < numbers.length; i++){
            if(numbers[i] < min){
                min = numbers[i]
            }
        }
        answer = min;
        return answer;
    }

    console.log(solution([5, 3, 7, 11, 2, 15, 17]));
}