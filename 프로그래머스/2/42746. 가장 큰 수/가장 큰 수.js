function solution(numbers) {
    numbers = numbers.map((num) => num + '');

    const answer = numbers.sort((a,b) => (b + a) - (a + b)).join("");
    
    return answer[0] == "0" ? "0" : answer
}
