function solution(n) {
    // n까지의 숫자에 대해 소수를 판별하기 위한 배열 생성
    const isPrime = Array(n + 1).fill(true);
    
    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime.filter(Boolean).length;
}
