export default () => { function solution(n, arr:number[]){
    let answer
    let sumMax = Number.MIN_SAFE_INTEGER
        arr.sort().forEach(num => {
        let sum = num.toString().split("").reduce((a,b) => a + Number(b),0)
        if(sumMax <= sum){ 
            sumMax = sum
            answer = num
        }
    })
    return answer;
}

let arr=[137, 460, 603, 40, 521, 128, 123];
console.log(solution(7, arr));
}