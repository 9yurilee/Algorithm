function solution(s) {
    if(s.length === 4 || s.length === 6) {
        let cnt = 0;
        for(let i = 0; i < s.length; i++) {
            if(Number.isInteger(s[i] % 2)) {
                cnt++;
            } 
        }
        if(cnt === s.length) return true
        else return false;
    } else return false;
}