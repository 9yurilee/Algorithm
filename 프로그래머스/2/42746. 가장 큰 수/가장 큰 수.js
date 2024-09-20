function solution(numbers) {
    numbers.sort((a, b) => (String(b) + String(a)) - (String(a) + String(b)));

    const answer = numbers.join("");
    
    // '0000' 같은 경우를 방지하기 위해 첫 번째 문자가 '0'이라면 '0'을 반환
    return answer[0] == "0" ? "0" : answer;
}
