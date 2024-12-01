function solution(A, B) {
    if (A.length !== B.length) {
        return -1;
    }

    let shifted = A;

    for (let i = 0; i < A.length; i++) {
        if (shifted === B) {
            return i;
        }

        shifted = shifted.slice(-1) + shifted.slice(0, -1);
    }

    return -1;
}