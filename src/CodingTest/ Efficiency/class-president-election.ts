export default () => {
    function solution(s){  
        let answer;
        let min = Number.MIN_SAFE_INTEGER
        let obj = {}
        for(let letter of s){
            obj[letter] = obj[letter] === undefined ? 1 : obj[letter] + 1
        }
        for(var key in obj) {
            	if(obj[key] > min){
                    min = obj[key]
                    answer = key
                }
        }
        return answer;
    }

    let str="BACBACCACCBDEDE";
    console.log(solution(str));
}
