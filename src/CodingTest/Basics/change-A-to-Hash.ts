// 문자열 중 A를 #으로 변환

export default () => {
    function solution(s){
        let answer="";
            for(let letter of s){
                let chrt = letter;
                if(letter === 'A'){
                    chrt = '#'
                }
                answer += chrt
            }
        return answer;
    }
    
    let str="BANANA";
    console.log(solution(str));
}