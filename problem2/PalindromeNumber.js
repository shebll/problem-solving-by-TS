function isPalindrome(x) {
    var numberToArrayString = x.toString().split("");
    var numberToArrayStringRevered = x.toString().split("").reverse();
    return numberToArrayString === numberToArrayStringRevered ? true : false;
}
console.log(isPalindrome(121));
