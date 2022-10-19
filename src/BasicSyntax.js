export function romanToInteger(str) {
    let translator = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < str.length; i++) {
        let digit = translator[str[i]];
        let nextDigit = translator[str[i + 1]];

        if (isNaN(digit)) {
            break;
        }

        if (isNaN(nextDigit)) {
            result += digit;
            break;
        }

        if (digit >= nextDigit) {
            result += digit;
        } else {
            result += nextDigit - digit;
            i++;
        }
    }

    return result;
}
