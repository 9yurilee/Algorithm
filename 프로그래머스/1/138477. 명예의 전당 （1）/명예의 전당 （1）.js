function solution(k, score) {
    const fameList = []; 
    const result = [];

    for (let i = 0; i < score.length; i++) {
        fameList.push(score[i]);

        if (fameList.length > k) {
            fameList.sort((a, b) => b - a);
            fameList.pop(); 
        }

        // 명예의 전당의 최하위 점수를 result에 저장
        result.push(Math.min(...fameList));
    }

    return result;
}