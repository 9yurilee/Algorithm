function solution(name, yearning, photo) {
    const yearningObj = {};
    
    for (let i = 0; i < name.length; i++) {
        yearningObj[name[i]] = yearning[i]; // 이름-추억점수 매핑
    }

    const result = [];

    for (let i = 0; i < photo.length; i++) {
        let totalScore = 0;
        
        for (let person of photo[i]) {
            // 해당 인물의 그리움 점수가 있으면 더해주고 없으면 0점 처리
            totalScore += yearningObj[person] || 0;
        }
        
        result.push(totalScore);
    }

    return result;
}