function solution(t, p) {
    let nums = [];

    for(let i = 0; i <= t.length - p.length; i++) {
        let num = t.slice(i, i + p.length);
        
        nums.push(num);
    }
    
    return nums.filter(num => num <= p).length;
}