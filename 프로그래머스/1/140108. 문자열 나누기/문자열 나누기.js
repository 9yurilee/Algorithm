function solution(s) {
    let count = 0;
    let i = 0;

    while (i < s.length) {
        let x = s[i];    
        let countX = 0;
        let countNotX = 0;  // x가 아닌 글자

        while (i < s.length) {
            if (s[i] === x) {
                countX++;
            } else {
                countNotX++;
            }
            i++;

            if (countX === countNotX) {
                count++;
                break;
            }
        }

        if (i === s.length && countX !== countNotX) {
            count++;
        }
    }

    return count;
}
