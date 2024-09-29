function solution(s) {
    let result = [];
    let lastPosition = {}; // 각 문자가 마지막으로 등장한 위치를 저장하는 객체

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (lastPosition[char] !== undefined) {
            // 이전에 등장한 위치가 있다면 현재 위치에서 그 위치를 뺀 값을 저장
            result.push(i - lastPosition[char]);
        } else {
            // 이전에 등장한 위치가 없다면 -1 저장
            result.push(-1);
        }

        // 현재 위치를 해당 문자의 마지막 위치로 변경
        lastPosition[char] = i;
    }

    return result;
}