//자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력(정렬x)
export default () => {
    function solution(a, b, c){
        let answer;
        let compareAB = a > b ? b : a;
        let compareAll = compareAB > c ? c : compareAB
        answer = compareAll
        return answer;
    }

    console.log(solution(2, 5, 1));
}