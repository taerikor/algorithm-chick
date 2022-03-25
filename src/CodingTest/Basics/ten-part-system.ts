// 차량 뒷자리 두개의 숫자 배열 중 차량 10부제에 해당하는 차량의 갯수

export default () => {
    function solution(day:number, arr:number[]){
        let answer = 0;
        for(let num of arr){
            if((num - day) % 10 === 0) answer++
        }
        return answer;
    }
    
   let arr=[25, 23, 11, 47, 53, 17, 33];
    console.log(solution(3, arr));
}

