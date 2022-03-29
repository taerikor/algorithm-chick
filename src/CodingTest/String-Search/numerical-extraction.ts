// 문자열중 숫자만 추출하여 숫자로 출력

export default () => {
    function solution(str:string){
        let answer="";
        for(let letter of str){
            if(!isNaN(Number(letter)))answer += letter
        }
        return parseInt(answer)
    }
    
    let str="g0en2T0s8eSoft";
    console.log(solution(str));
}