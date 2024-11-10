function solution(babbling) {
    // 발음 가능한 단어 목록
    const patterns = ["aya", "ye", "woo", "ma"];
    let count = 0;

    for (let word of babbling) {
        let isPronounceable = true;

        for (let pattern of patterns) {
            // 중복된 발음이 있는지 확인
            if (word.includes(pattern + pattern)) {
                isPronounceable = false;
                break;
            }
        }

        // 연속된 발음이 없을 때 발음 가능한 단어 체크
        if (isPronounceable) {
            // 발음 가능한 패턴을 모두 공백으로 대체
            for (let pattern of patterns) {
                word = word.replaceAll(pattern, ' ');
            }
            // 모든 패턴이 제거된 후 공백으로만 남았다면 발음 가능한 단어로 판단
            if (word.trim() === '') {
                count++;
            }
        }
    }

    return count;
}
