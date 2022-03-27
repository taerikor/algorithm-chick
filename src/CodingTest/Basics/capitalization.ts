// 문자열을 대문자로

export default () => {
    function solution(s:string){         
        let answer="";
        for(let letter of s){
            let charCode = letter.charCodeAt(0)
            if(97 <= charCode && charCode <= 122){
                answer += String.fromCharCode(charCode - 32)
            }else{
                answer += letter;
            }
        }
        return answer;
    }

    let str="KoreaTimeGood";
    console.log(solution(str));
}