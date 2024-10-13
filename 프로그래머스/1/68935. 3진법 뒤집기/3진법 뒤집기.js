function solution(n) {
    // n을 3진법 문자열로 변환
    let ternary = n.toString(3);

    let reversedTernary = ternary.split('').reverse().join('');

    // 뒤집은 3진법 문자열을 10진법으로 변환
    return parseInt(reversedTernary, 3);
}