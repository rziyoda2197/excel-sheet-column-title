function toExcelTitle(n) {
    let result = '';
    while (n > 0) {
        let remainder = n % 26;
        if (remainder === 0) {
            remainder = 26;
            n--;
        }
        result = String.fromCharCode(64 + remainder) + result;
        n = Math.floor(n / 26);
    }
    return result;
}

console.log(toExcelTitle(1)); // A
console.log(toExcelTitle(26)); // Z
console.log(toExcelTitle(27)); // AA
console.log(toExcelTitle(702)); // ZZ
console.log(toExcelTitle(703)); // AAA
