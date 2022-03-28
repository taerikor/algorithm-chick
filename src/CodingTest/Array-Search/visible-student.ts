//일렬로 서 있는 학생의 키가 앞에 서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수

export default () => {
    function solution(arr){         
        let answer = 0;
        let min = 0;
        for(let num of arr){
            if(num > min){
                min = num;
                answer++
            }
        }
        return answer;
    }

    let arr=[130, 135, 148, 140, 145, 150, 150, 153];
    console.log(solution(arr));
}