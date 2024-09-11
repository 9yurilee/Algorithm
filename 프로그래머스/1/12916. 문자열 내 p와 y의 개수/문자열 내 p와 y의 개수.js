function solution(s){
    const target = [...s.toUpperCase()].filter(el => el === 'P' || el === 'Y');
    
    const findP = target.filter(el => el === 'P');
    const findY = target.filter(el => el === 'Y');

    
    return findP.length === findY.length ? true : false;
}