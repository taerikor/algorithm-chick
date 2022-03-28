export default () => {
    function solution(s: string[]){  
        let answer;
        let min=0;
        for(let letter of s){
            if(letter.length > min){
                answer=letter;
                min = letter.length
                
            }
        }
        return answer;
    }
    let str=["teacher", "time", "student", "beautiful", "good"];
    console.log(solution(str));
}