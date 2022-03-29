//같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기

export default () => {
    function solution(s) {
        let answer=""
        let num = 1;
        let previous = ""
        for(let letter of s){
            if(letter === previous){
                num++
            }else{
                if(num > 1){
                    answer+=`${num}${letter}`
                }else{
                    answer+=letter
                }
                num = 1;
            }
        previous = letter
        }

        return answer;
    }
    let str = "KKHSSSSSSSE"
    console.log(solution(str))
}