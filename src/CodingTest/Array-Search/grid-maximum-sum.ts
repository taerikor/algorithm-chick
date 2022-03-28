// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합
export default () => {
    function solution(arr){  
        let answer = 0;
        let diagonal = [0,0];
        let lastIndex = arr.length -1
        let row;
        let col;
        for(let i = 0; i < arr.length; i++){
            row = 0
            col = 0;
            for(let j = 0; j < arr.length; j++){
                row += arr[i][j]
                col += arr[j][i]
            }
            answer = Math.max(row, col, answer)

            diagonal[0] += arr[i][i]
            diagonal[1] += arr[lastIndex - i][i]
        }


        return answer = Math.max(...diagonal, answer);
    }

    let arr=[[10, 13, 10, 12, 15], 
             [12, 39, 30, 23, 11],
             [11, 25, 50, 53, 15],
             [19, 27, 29, 37, 27],
             [19, 13, 30, 13, 19]];
    console.log(solution(arr));
}