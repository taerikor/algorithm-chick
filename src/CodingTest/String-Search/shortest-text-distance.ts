//문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리
export default () => {
    function solution(s,t) {
        let answer=[]
        let distance = s.length;
        for(let i = 0; i < s.length; i++ ){
            distance++
            if(s[i] === t)distance = 0
            answer.push(distance)
        }
        distance=s.length;
        for(let j = s.length - 1; j >= 0 ; j-- ){
            distance++
            if(s[j] === t)distance = 0
            if(answer[j] > distance) answer[j] = distance
        }

        return answer;
    }
    let str = "tteachermode"
    console.log(solution(str,"e"))
}