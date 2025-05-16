function generateCombinations(str) {
    const combinations = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            combinations.push(str.slice(i, j + 1));
        }
    }
    return combinations.join(',');
}

console.log(generateCombinations('dog'));         
