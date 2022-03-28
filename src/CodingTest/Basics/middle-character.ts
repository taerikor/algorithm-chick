// 문자열의 중간 인덱스의 문자를 출력 (짝수는 중간 두개)
export default () => {
    function solution(s:string){  
        let answer;
        let index = Math.floor(s.length / 2)
        answer = s[index];
        if(s.length % 2 === 0) answer += s[index - 1]
        return answer;
    }
    console.log(solution("hello")); 
}