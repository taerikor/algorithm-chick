// 가위 바위 보 승자 혹은 비긴 결과

export default () => {
    function solution(a, b){         
        let answer="";
        let rules= [
            ["D","B","A"],
            ["A","D","B"],
            ["B","A","D"]
        ]
        for(let i = 0; i< a.length; i++){
            answer += rules[a[i]-1][b[i]-1]
        }
        return answer;
    }

    let a=[2, 3, 3, 1, 3];
    let b=[1, 1, 2, 2, 3];
    console.log(solution(a, b));
}