function solution(s, skip, index) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // 알파벳 문자열
    const skipSet = new Set(skip); // skip 문자를 집합으로 생성하여 빠르게 확인
    let shiftedString = '';

    // 알파벳을 순회할 수 있도록 skip 문자를 제외한 유효한 문자 배열 생성
    const validAlphabet = [...alphabet].filter(char => !skipSet.has(char));
    const length = validAlphabet.length; // 유효한 알파벳 배열의 길이

    // 각 문자에 대해 index만큼 이동하며 새로운 문자열 생성
    for (let char of s) {
        const currentIndex = validAlphabet.indexOf(char); // 현재 문자의 인덱스 찾기
        const newIndex = (currentIndex + index) % length; // 이동한 인덱스 계산
        shiftedString += validAlphabet[newIndex]; // 변환한 문자 추가
    }

    return shiftedString;
}
