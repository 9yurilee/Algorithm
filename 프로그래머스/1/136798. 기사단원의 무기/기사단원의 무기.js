function solution(number, limit, power) {
    let totalIron = 0;

    // 약수의 개수를 구하기
    function countDivisors(n) {
        let count = 0;
        for (let i = 1; i * i <= n; i++) {
            if (n % i === 0) {
                count++;
                if (i !== n / i) count++;  // i와 짝이 되는 약수 n/i를 찾음
            }
        }
        return count;
    }

    for (let i = 1; i <= number; i++) {
        let attackPower = countDivisors(i);  
        
        if (attackPower > limit) {
            totalIron += power;
        } else {
            totalIron += attackPower;
        }
    }

    return totalIron;
}
