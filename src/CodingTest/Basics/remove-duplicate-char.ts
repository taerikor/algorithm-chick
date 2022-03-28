export default () => {
    function solution(s:string){  
        let answer="";
        for(let letter of s){
            if(!answer.includes(letter)){
                answer += letter
            }
        }
        return answer;
    }
    console.log(solution("ksekkset")); 
}