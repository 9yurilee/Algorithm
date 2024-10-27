function solution(n, lost, reserve) {
    let actualLost = lost.filter(student => !reserve.includes(student));
    let actualReserve = reserve.filter(student => !lost.includes(student));

    // 체육복을 빌려줄 수 있는 경우를 탐색
    let count = n - actualLost.length;

    actualLost.sort((a, b) => a - b);

    for (let student of actualLost) {
        // 앞 번호 학생에게 빌릴 수 있는지 확인
        let borrowIndex = actualReserve.indexOf(student - 1);
        
        if (borrowIndex !== -1) {
            actualReserve.splice(borrowIndex, 1);
            count++;
        } 
        // 뒤 번호 학생에게 빌릴 수 있는지 확인
        else if ((borrowIndex = actualReserve.indexOf(student + 1)) !== -1) {
            actualReserve.splice(borrowIndex, 1);
            count++;
        }
    }

    return count;
}
