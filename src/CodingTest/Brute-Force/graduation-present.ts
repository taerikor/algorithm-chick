export default () => {
    function solution(m, product){
        let answer = 0
        product.sort((a,b) => ((a[0]+a[1]) - (b[0] + b[1])));
        for(let i = 0; i < product.length; i++){
            let productNum = 1
            let products = [...product]
            let [price, delivery] = products.splice(i,1)[0]
            let budget = m - (price/2 + delivery)
            for(let [price, delivery] of products){
                let currentBudget = budget - (price + delivery)
                if(currentBudget >= 0){
                    productNum++;
                    budget = currentBudget
                }else{
                    break;
                }
            }
            if(answer < productNum) answer = productNum
        }
        return answer;
    }
    
    let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
    console.log(solution(28, arr));
}