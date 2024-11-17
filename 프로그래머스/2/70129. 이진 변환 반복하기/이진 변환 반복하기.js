function solution(s) {
    let count = 0;
    let removedZeros = 0;

    while (s !== "1") {
        const filtered = s.split('').filter(char => char === '1');
        removedZeros += s.length - filtered.length;

        s = filtered.length.toString(2);
        count++;
    }

    return [count, removedZeros];
}