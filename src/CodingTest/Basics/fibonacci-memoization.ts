// return Fibonacci sequence index n number

export default () => {
    let count = 0
    const fib = (n:number, memo:{[i:number]:number}={}):number => {
        count++
        if(n in memo)return memo[n]
        if(n <= 2) return 1;
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
        return memo[n]
    }
    console.log(fib(100),count)
}
