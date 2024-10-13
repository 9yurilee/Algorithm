function solution(a, b, n) {
    let total = 0;
    
    while (n >= a) {
        let newCoke = Math.floor(n / a) * b;  // 교환으로 받는 새 콜라
        
        total += newCoke;
        
        n = newCoke + (n % a);  // 남은 빈 병 + 새로 받은 콜라 병을 마시고 남은 빈 병
    }
    
    return total;
}
