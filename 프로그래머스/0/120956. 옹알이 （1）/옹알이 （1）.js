function solution(babbling) {
    const validWords = ["aya", "ye", "woo", "ma"];
    let count = 0;

    for (let word of babbling) {
        let temp = word;

        for (let validWord of validWords) {
            temp = temp.replace(validWord, ' '); 
        }

        if (temp.trim() === '') {
            count++;
        }
    }

    return count;
}
