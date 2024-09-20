function solution(citations) {
    // 인용 횟수가 h보다 작은 순간부터 그 이후의 논문들은 H-Index 조건을 절대 만족할 수 없으므로 내림차순 정렬
    citations.sort((a, b) => b - a);
 
    let hIndex = 0;
    
    for(let i = 0; i < citations.length; i++) {
        // i는 배열의 인덱스로 논문의 순서, i + 1은 해당 인덱스까지 포함한 총 논문의 수
        if (citations[i] >= i + 1) {
            // 논문의 인용 횟수가 현재 인덱스 + 1 이상이라면 H-Index를 증가시킵니다.
            hIndex = i + 1;
        } else {
            break;
        }
    }
    
    return hIndex;
}
