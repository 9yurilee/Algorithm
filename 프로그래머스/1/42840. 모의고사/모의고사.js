function solution(answers) {
    let score = [0, 0, 0];
    
    const student1 = [1, 2, 3, 4, 5];
    const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    answers.forEach((answer, i) => {
        if (answer === student1[i % student1.length]) score[0]++;
        if (answer === student2[i % student2.length]) score[1]++;
        if (answer === student3[i % student3.length]) score[2]++;
    });
    const maxScore = Math.max(...score);
    
    return score
        .map((s, idx) => (s === maxScore ? idx + 1 : null))
        .filter(num => num !== null); 
}