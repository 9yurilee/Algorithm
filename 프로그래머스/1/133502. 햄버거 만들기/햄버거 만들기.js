function solution(ingredient) {
    let stack = [];
    let count = 0;
    
    for (let item of ingredient) {
        stack.push(item);
        
        if (stack.length >= 4) {
            const lastFour = stack.slice(-4).join('');
            if (lastFour === '1231') {
                stack.splice(-4); 
                count++;
            }
        }
    }
    
    return count;
}
