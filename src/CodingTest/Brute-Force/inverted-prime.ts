export default () => {
    function isPrime(num:number){
        if(num < 2) return false;
        for(let i = 2; i <= Math.sqrt(num); i++){
            if((num % i) === 0 ){
                return false
            }
        }
        return true
    }
    function solution(arr:number[]){
        let answer=[]
        arr.forEach(num => {
            let reverse = 0;
            while(num){
                let temp = num % 10;
                reverse = reverse * 10 + temp;
                num = Math.floor(num / 10)
            }
            if(isPrime(reverse)) answer.push(reverse)
        })
        return answer
    }
    
    let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
    console.log(solution(arr));
}