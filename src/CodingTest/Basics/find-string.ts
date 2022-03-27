// 문자열 중 A를 #으로 변환

export default () => {
    function solution(s,k){
        let answer=0
            for(let letter of s){
                if(letter === k){
                    answer++
                }
            }
        return answer;
    }
    
    let str="COMPUTERPROGRAMMING";
    console.log(solution(str,'R'));
}