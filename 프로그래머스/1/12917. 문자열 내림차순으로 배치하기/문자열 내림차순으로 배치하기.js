function solution(s) {
    const strArr = s.split('');

    strArr.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
    
    return strArr.join('');
}