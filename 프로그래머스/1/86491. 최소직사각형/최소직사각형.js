function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    for (let size of sizes) {
        let [w, h] = size;
        
        // 각 명함을 회전하여 큰 값을 가로로, 작은 값을 세로로 설정
        if (w < h) {
            [w, h] = [h, w];
        }
        
        // 가로와 세로의 최댓값을 갱신
        if (w > maxWidth) maxWidth = w;
        if (h > maxHeight) maxHeight = h;
    }
    
    return maxWidth * maxHeight;
}