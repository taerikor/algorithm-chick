// N*N 격자판에 주어집니다.
// 각 격자에는 그 지역의 높이가 쓰여있습니다. 
// 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 
// 봉우리 지역이 몇 개 있는 지
// 격자의 가장자리는 0

export default () => {
    function solution(arr){
        let answer = 0;
        let dx = [-1,0,1,0]
        let dy = [0,-1,0,1]
        let size = arr.length;
          for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length; j++){
                let flag = true
                for(let k = 0; k < dx.length; k++){
                    let nx = i + dx[k];
                    let ny = j + dy[k];
                    if(nx >= 0 && nx < size && ny >= 0 && ny < size && arr[nx][ny] > arr[i][j]){
                        flag = false;
                        break;
                    }
                }
                if(flag)answer++
            }
          }
        return answer 
    }

    let arr=[[5, 3, 7, 2, 3], 
             [3, 7, 1, 6, 1],
             [7, 2, 5, 3, 4],
             [4, 3, 6, 4, 1],
             [8, 7, 3, 5, 2]];
    console.log(solution(arr));

}