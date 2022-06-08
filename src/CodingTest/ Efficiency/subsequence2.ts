export default () => {
    function solution(m, arr){
        let answer=0
      let index=0;
      let sum = 0;
      for(let i =0; i < arr.length; i++){
          sum += arr[i]
              while(sum > m){
                  sum -= arr[index]
                  index++
              }
              answer += (i - index + 1)
     
      }
        return answer;
    }
    
    let a=[1, 3, 1, 2, 3];
    console.log(solution(5, a));
}
