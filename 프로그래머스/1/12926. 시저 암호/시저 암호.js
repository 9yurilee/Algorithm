function solution(s, n) {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === ' ') {
            result += char;
            continue;
        }

        let charCode = s.charCodeAt(i);
        let shiftedCharCode;

        if (char >= 'A' && char <= 'Z') {
            // 대문자 처리
            shiftedCharCode = ((charCode - 65 + n) % 26) + 65;
        } else if (char >= 'a' && char <= 'z') {
            // 소문자 처리
            shiftedCharCode = ((charCode - 97 + n) % 26) + 97;
        }

        result += String.fromCharCode(shiftedCharCode);
    }

    return result;
}