function solution(numbers) {
    let answer = new Set();
    
    for (let i = 0; i < numbers.length; i++) {
        for (let k = i + 1; k < numbers.length; k++) {
            answer.add(numbers[i] + numbers[k]);
        }
    }
    
    return [...answer].sort((a, b) => a - b);
}