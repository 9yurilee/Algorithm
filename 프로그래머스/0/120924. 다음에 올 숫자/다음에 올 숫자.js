function solution(common) {
    const diff = common[1] - common[0]; // 등차수열의 공차
    const ratio = common[1] / common[0]; // 등비수열의 공비

    if (common[1] - common[0] === common[2] - common[1]) {
        // 등차수열일 경우
        return common[common.length - 1] + diff;
    } else {
        // 등비수열일 경우
        return common[common.length - 1] * ratio;
    }
}