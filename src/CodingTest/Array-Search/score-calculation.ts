// OX문제 채점
// 맞으면 1점, 연속 n번 맞으면 n점, 틀리면 0점
export default () => {
    function solution(arr){         
        let answer = 0;
        let point = 0;
        for(let num of arr){
            if(num === 0){
                point = 0;
                continue;
            }
            point++
            answer += point
        }
        return answer;
    }

    let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
    console.log(solution(arr));
}