function solution(polynomial) {
    // 항을 '+' 기준으로 나누어 배열로 만든다
    const terms = polynomial.split(' + ');

    let xCoefficient = 0;  // x 항의 계수
    let constant = 0;      // 상수항

    terms.forEach(term => {
        if (term.includes('x')) {  // x 항인 경우
            if (term === 'x') {
                xCoefficient += 1;
            } else if (term === '-x') {
                xCoefficient -= 1;
            } else {
                const coefficient = term.replace('x', '');
                xCoefficient += parseInt(coefficient);
            }
        } else {  // 상수항인 경우
            constant += parseInt(term);
        }
    });

    let result = '';
    
    // x 항이 존재하면
    if (xCoefficient !== 0) {
        if (xCoefficient === 1) {
            result += 'x';
        } else if (xCoefficient === -1) {
            result += '-x';
        } else {
            result += xCoefficient + 'x';
        }
    }

    // 상수항이 존재하면
    if (constant !== 0) {
        if (result !== '') result += ' + ';
        result += constant;
    }

    // 만약 결과가 비어있다면 0 반환
    if (result === '') {
        result = '0';
    }

    return result;
}
