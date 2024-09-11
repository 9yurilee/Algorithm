function solution(n) {
    let x = 0;
    
    while (n) {
        if(n % x !== 1) {
            x++;
            continue;
        }    
        return x;
    }
}