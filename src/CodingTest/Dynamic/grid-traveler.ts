//
export default () => {
    function solution(x,y){
        let answer = 0;
        const findWay = (x,y,memo=new Map()) => {
            const key = `${x},${y}`
            if(key in memo) return memo[key]
            if(x === 1 && y === 1) return 1
            if(x > 0 && y > 0){
                memo[key] = findWay(x-1, y, memo) + findWay(x, y-1, memo)
                return memo[key]
            }else{
                return 0
            }
        }
        return findWay(x,y)
    }

    console.log(solution(20,20));
}