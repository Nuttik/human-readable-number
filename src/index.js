module.exports = function toReadable(number) {
    let num = String(number);
    const Numbers = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    const TensOfNumbers = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    if (number == 0) {
        return "zero";
    }
    if (number < 20) {
        return Numbers[num];
    } else if (number >= 20 && number < 100) {
        if (+num.slice(-1) == 0) {
            return TensOfNumbers[num[0]];
        } else {
            return TensOfNumbers[num[0]] + " " + Numbers[num[1]];
        }
    } else if (number >= 100 && number < 1000) {
        if (+num.slice(-2) < 1) {
            return Numbers[num[0]] + " " + "hundred";
        } else if (+num.slice(-2) < 20) {
            return (
                Numbers[num[0]] +
                " " +
                "hundred" +
                " " +
                Numbers[String(+num.slice(-2))]
            );
        } else if (+num.slice(-2) >= 20) {
            if (+num.slice(-1) == 0) {
                return (
                    Numbers[num[0]] +
                    " " +
                    "hundred" +
                    " " +
                    TensOfNumbers[String(+num.slice(-2, -1))]
                );
            } else {
                return (
                    Numbers[num[0]] +
                    " " +
                    "hundred" +
                    " " +
                    TensOfNumbers[String(+num.slice(-2, -1))] +
                    " " +
                    Numbers[String(+num.slice(-1))]
                );
            }
        }
    }
};
