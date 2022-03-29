export default () => {
    function solution(s:string){
        let answer="YES";
        s = s.toLowerCase()
        let size = s.length
        for(let i = 0; i < Math.floor(size/2); i++){
            if(s[i] !== s[size -1 -i])return "NO"
        }
        return answer;
    }
    
    let str="gooOG";
    console.log(solution(str));
}