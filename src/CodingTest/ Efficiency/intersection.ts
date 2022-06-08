export default () => {
    function solution(arr1, arr2){
        let answer=[];
        let p1=0;
        let p2=0;
        let n = arr1.length;
        let m = arr2.length;
        let sumArr = []
        while(p1 < n && p2 < m){
            sumArr[arr1[p1]] = sumArr[arr1[p1]] === undefined ? 1 : sumArr[arr1[p1]] + 1
            sumArr[arr2[p2]] = sumArr[arr2[p2]] === undefined ? 1 : sumArr[arr2[p2]] + 1
            p1++;
            p2++;
        }
        while(p1 < n){
            sumArr[arr1[p1]] = sumArr[arr1[p1]] === undefined ? 1 : sumArr[arr1[p1]] + 1
            p1++;
        }
        while(p2 < m){
            sumArr[arr2[p2]] = sumArr[arr2[p2]] === undefined ? 1 : sumArr[arr2[p2]] + 1
            p2++;
        }
        for(let i = 0; i < sumArr.length; i++){
            if(sumArr[i] >= 2){
                answer.push(i)
            }
        }
        return answer;
    }
    
    let a=[1, 3, 9, 5, 2];
    let b=[3, 2, 5, 7, 8];
    console.log(solution(a, b));
}
