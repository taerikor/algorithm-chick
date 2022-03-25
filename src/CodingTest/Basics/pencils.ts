//N명이 학생수에게 하나씩 나눠줄 연필 다스의 갯수
export default () => {
    function solution(n){
        let answer;
        answer= Math.ceil(n/12)
        return answer;
    }

    console.log(solution(178));
}