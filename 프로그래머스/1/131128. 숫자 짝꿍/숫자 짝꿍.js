function solution(X, Y) {
    const countX = Array(10).fill(0);
    const countY = Array(10).fill(0);

    // X와 Y의 각 숫자 빈도 계산
    for (const char of X) countX[char]++;
    for (const char of Y) countY[char]++;

    let result = [];
    for (let i = 9; i >= 0; i--) { // 큰 숫자부터
        const commonCount = Math.min(countX[i], countY[i]);
        if (commonCount > 0) {
            result.push(String(i).repeat(commonCount));
        }
    }

    if (result.length === 0) return "-1"; // 공통된 숫자가 없는 경우
    const finalResult = result.join('');
    if (finalResult[0] === "0") return "0"; // 결과가 0으로만 구성된 경우

    return finalResult;
}
