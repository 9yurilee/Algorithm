function solution(array) {
    const frequency = {};
    
    for (let num of array) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    
    let max = Math.max(...Object.values(frequency));
    
    let mostFrequent = Object.keys(frequency).filter(key => frequency[key] === max);
    
    if (mostFrequent.length > 1) {
        return -1;
    }
    
    return parseInt(mostFrequent[0]);
}
