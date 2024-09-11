function solution(left, right) {
    let result = 0;
    
    for(let i = left; i <= right; i++) {
        let cnt = 0; // 약수 갯수
        
        for(let k = 1; k <= i; k++) {
            if(i % k === 0) {
                cnt++;
            }
            
        }
        
        if(cnt % 2 === 0){
            result += i;
        } else {
            result -= i;
        }
    }
    
    return result;
};