//자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력(정렬x)
export default () => {
    function solution(a, b, c){
        let answer;
        let smallerAB = a > b ? b : a;
        let smallestAll = smallerAB > c ? c : smallerAB
        answer = smallestAll
        return answer;
    }

    console.log(solution(2, 5, 1));
}