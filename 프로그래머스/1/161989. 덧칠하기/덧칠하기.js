function solution(n, m, section) {
    let count = 0;  // 페인트칠 횟수를 세는 변수
    let lastPainted = 0;  // 마지막으로 페인트칠이 끝난 구역

    for (const start of section) {
        if (start > lastPainted) {
            count++;
            lastPainted = start + m - 1; 
        }
    }
    
    return count;
}
