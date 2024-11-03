function solution(numbers, hand) {
    const keypads = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    
    let leftThumb = keypads['*'];
    let rightThumb = keypads['#'];
    
    let result = '';
    
    for (let number of numbers) {
        // 왼쪽 숫자일 경우
        if ([1, 4, 7].includes(number)) {
            result += 'L';
            leftThumb = keypads[number];
        }
        // 오른쪽 숫자일 경우
        else if ([3, 6, 9].includes(number)) {
            result += 'R';
            rightThumb = keypads[number];
        }
        // 가운데 숫자일 경우
        else {
            const target = keypads[number];
            
            const leftDistance = Math.abs(leftThumb[0] - target[0]) + Math.abs(leftThumb[1] - target[1]);
            const rightDistance = Math.abs(rightThumb[0] - target[0]) + Math.abs(rightThumb[1] - target[1]);
            
            if (leftDistance < rightDistance) {
                result += 'L';
                leftThumb = target;
            } else if (rightDistance < leftDistance) {
                result += 'R';
                rightThumb = target;
            } else {
                if (hand === 'left') {
                    result += 'L';
                    leftThumb = target;
                } else {
                    result += 'R';
                    rightThumb = target;
                }
            }
        }
    }
    
    return result;
}
