function solution(food) {
    let leftResult = "";
    
    for (let i = 1; i < food.length; i++) {
        let count = Math.floor(food[i] / 2); // 절반만큼 배치
        
        leftResult += i.toString().repeat(count); // i번 음식을 count번 반복해서 추가
    }
    
    const rightResult = leftResult.split('').reverse().join(''); // 왼쪽을 뒤집어서 오른쪽에 배치
    
    return leftResult + '0' + rightResult;
}