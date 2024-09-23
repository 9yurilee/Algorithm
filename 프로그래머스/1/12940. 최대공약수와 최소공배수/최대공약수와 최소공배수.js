function solution(num1, num2) {
  
    // 최대공약수
    const getGCD = (a, b) => {
        // a와 b의 최대공약수는 b와 a % b의 최대공약수와 같다(공약수의 성질)
        while (b !== 0) {
            let tmp = b; 
            
            b = a % b;
            a = tmp;
        }
        return a;
    }
    
    // 최소공배수
    const getLCM = (x, y) => {
        return Math.abs(x * y) / getGCD(num1, num2);
    }
    
    return [getGCD(num1, num2), getLCM(num1, num2)];
}