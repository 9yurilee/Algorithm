function solution(quiz) {
    return quiz.map((el) => {
        // 공백을 기준으로 분리
        const [X, operator, Y, , Z] = el.split(" ");

        const numX = Number(X);
        const numY = Number(Y);
        const numZ = Number(Z);

        const result = operator === "+" ? numX + numY : numX - numY;

        return result === numZ ? "O" : "X";
    });
}
