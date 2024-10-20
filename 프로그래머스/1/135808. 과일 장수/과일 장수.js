function solution(k, m, score) {
    score.sort((a, b) => b - a);

    let totalProfit = 0;

    for (let i = 0; i + m <= score.length; i += m) {
        let boxPrice = score[i + m - 1] * m;
        totalProfit += boxPrice;
    }

    return totalProfit;
}
