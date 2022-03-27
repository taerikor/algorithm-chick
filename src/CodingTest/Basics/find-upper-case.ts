// 문자열 중 대문자 갯수

export default () => {
    function solution(s:string){
        let answer=0
        for(let letter of s){
            if(letter.toUpperCase() === letter){
                answer++
            }
        }
        return answer;
    }
    
    let str="KoreaTimeGood";
    console.log(solution(str));
}