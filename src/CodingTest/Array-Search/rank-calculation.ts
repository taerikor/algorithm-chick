//학생 점수 배열을 등수를 나타내는 배열로
export default () => {
    function solution(arr){  
        let answer = arr.map((num) => {
            let rank = 1;
            for(let num2 of arr){
                if(num < num2){
                    rank++
                }
            }
            return rank
        })
        return answer;
    }

    let arr=[92, 92, 92, 100, 76];
    console.log(solution(arr));
}