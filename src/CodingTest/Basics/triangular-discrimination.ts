//길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"
//세 변의 길이를 줬을 때 길이가 가장 긴 변의 길이는 다른 두 변 길이의 합보다 작아야 함
export default () => {
    function solution(a, b, c){
        let answer
        let biggerAB = a > b ? a : b;
        let biggestABC = biggerAB > c ? biggerAB : c;
        answer = a+b+c-biggestABC > biggestABC ? 'YES' : 'NO'
        return answer;
    }

    console.log(solution(6, 7, 11));
}