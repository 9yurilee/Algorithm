function solution(num, total) {
    // 배열의 첫 번째 값 계산 (등차수열)
    const start = Math.floor((total - (num * (num - 1)) / 2) / num);

    return Array.from({ length: num }, (_, i) => start + i);
}