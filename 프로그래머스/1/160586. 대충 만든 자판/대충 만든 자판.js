function solution(keymap, targets) {
    const minPress = {};

    // keymap을 사전화하여 각 문자 최소 키 누름 횟수 저장
    for (let i = 0; i < keymap.length; i++) {
        for (let j = 0; j < keymap[i].length; j++) {
            const char = keymap[i][j];
            if (!(char in minPress) || minPress[char] > j + 1) {
                minPress[char] = j + 1;
            }
        }
    }

    // targets의 각 문자열에 대해 키 누름 횟수 계산
    return targets.map(target => {
        let totalPress = 0;

        for (const char of target) {
            if (!(char in minPress)) {
                return -1; // 작성 불가능한 문자가 있는 경우
            }
            totalPress += minPress[char];
        }

        return totalPress;
    });
}
