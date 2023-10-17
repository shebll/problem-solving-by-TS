function romanToInt(s) {
    var res = 0;
    var romanObject = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    var subNumber = {
        I: ["X", "V"],
        X: ["L", "C"],
        C: ["D", "M"],
    };
    console.log(subNumber.I.indexOf("2"));
    var inputArray = s.toLocaleUpperCase().split("");
    for (var i = 0; i < inputArray.length; i++) {
        if (typeof subNumber[inputArray[i]] == "object" &&
            subNumber[inputArray[i]].indexOf(inputArray[i + 1]) !== -1) {
            res -= romanObject[inputArray[i]];
        }
        else {
            res += romanObject[inputArray[i]];
        }
    }
    return res;
}
console.log(romanToInt("IVVI"));
