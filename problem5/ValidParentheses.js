function isValid(s) {
    var stack = [];
    // Define a mapping of open and close brackets
    var bracketMap = {
        "(": ")",
        "{": "}",
        "[": "]",
    };
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        console.log(bracketMap[char]);
        if (bracketMap[char]) {
            // If the character is an open bracket, push it onto the stack.
            stack.push(char);
        }
        else {
            // If the character is a close bracket:
            // 1. If the stack is empty, it's not valid (unmatched close bracket).
            // 2. Pop the last open bracket from the stack.
            // 3. If the popped open bracket doesn't match the current close bracket, it's not valid.
            if (!stack.length || bracketMap[stack.pop()] !== char) {
                return false;
            }
        }
    }
    // If the stack is empty at the end, all brackets are matched and in the correct order.
    return stack.length === 0;
}
console.log(isValid("{}"));
