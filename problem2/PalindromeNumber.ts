function isPalindrome(x: number): boolean {
  const numberToArrayString = x.toString().split("");
  const numberToArrayStringRevered = x.toString().split("").reverse();
  return numberToArrayString.toString() ===
    numberToArrayStringRevered.toString()
    ? true
    : false;
}
console.log(isPalindrome(121));
