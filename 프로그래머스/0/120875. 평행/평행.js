function solution(dots) {
    // 두 점의 기울기 계산
    const getSlope = (dot1, dot2) => {
        const [x1, y1] = dot1;
        const [x2, y2] = dot2;
        return (y2 - y1) / (x2 - x1);
    };

    const slopes = [
        [0, 1, 2, 3],
        [0, 2, 1, 3],
        [0, 3, 1, 2],
    ];

    for (const [a, b, c, d] of slopes) {
        const slope1 = getSlope(dots[a], dots[b]);
        const slope2 = getSlope(dots[c], dots[d]);
        if (slope1 === slope2) return 1;
    }

    return 0;
}