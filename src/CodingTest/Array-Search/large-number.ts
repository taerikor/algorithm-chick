// 자신의 바로 앞 수보다 큰 수만 출력
export default () => {
    function solution(arr) {
    let answer=[];
    let previous = 0;
        for(let num of arr){
            if(num > previous)answer.push(num);
            previous = num;
        }

    return answer;
}

let arr=[7, 3, 9, 5, 6, 12];
console.log(solution(arr));
}