// 소문자를 대문자, 대문자를 소문자로

export default () => {
    function solution(s:string){         
        let answer="";
        for(let letter of s){
            let charCode = letter.charCodeAt(0)
            if(97 <= charCode && charCode <= 122){
                answer += String.fromCharCode(charCode - 32)
            }else{
                answer += String.fromCharCode(charCode + 32)
            }
        }
        return answer;
    }

    let str="KoreaTimeGood";
    console.log(solution(str));
}