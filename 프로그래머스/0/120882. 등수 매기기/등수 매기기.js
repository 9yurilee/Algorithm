function solution(scores) {
    const avgs = scores.map(([eng, math]) => (eng + math) / 2);
    const sortedAvg = [...avgs].sort((a, b) => b - a);
    
    return avgs.map(avg => sortedAvg.indexOf(avg) + 1);
}