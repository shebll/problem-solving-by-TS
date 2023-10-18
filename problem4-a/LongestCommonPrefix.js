function longestCommonPrefix(strs) {
    // result to stor the longest common prefix
    var AllRes = "";
    var maxRes = 0;
    // we need to know smallest string to reduce the looping
    var minStringLength = 1000;
    // getting smallest string to reduce the looping
    for (var index = 0; index < strs.length; index++) {
        if (strs[index].length < minStringLength)
            minStringLength = strs[index].length;
    }
    for (var charIndexx = 0; charIndexx < minStringLength; charIndexx++) {
        var res = "";
        //looping for every impossible letter in smallest string
        for (var charIndex = charIndexx; charIndex < minStringLength; charIndex++) {
            // set a counter to make sure the letter is common in every string
            var inAll = 1;
            // loop for check the charIndex letter in every string entered
            for (var index = 1; index < strs.length; index++) {
                if (strs[0].charAt(charIndex) === strs[index].charAt(charIndex)) {
                    inAll++;
                }
            }
            // if the counter is equal the length means it move in all strings and the letter is common
            if (inAll === strs.length && res.length == 0) {
                res += strs[0].charAt(charIndex);
            }
            else if (inAll === strs.length &&
                strs[0].charAt(charIndex - 1) == res[res.length - 1]) {
                res += strs[0].charAt(charIndex);
            }
        }
        if (res.length > maxRes) {
            maxRes = res.length;
            AllRes = res;
        }
    }
    console.log(AllRes);
    return "";
}
console.log(longestCommonPrefix(["flower", "fkow"]));
