function solution(n, arr1, arr2) {
    return arr1.map((num1, i) => {
        const merged = num1 | arr2[i];

        const binaryString = merged.toString(2).padStart(n, '0');

        return binaryString.replace(/1/g, '#').replace(/0/g, ' ');
    });
}
