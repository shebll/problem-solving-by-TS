function longestCommonPrefix(strs: string[]): string {
  // result to stor the longest common prefix
  let AllRes: string = "";
  let maxRes = 0;
  // we need to know smallest string to reduce the looping
  let minStringLength: number = 1000;
  // getting smallest string to reduce the looping
  for (let index = 0; index < strs.length; index++) {
    if (strs[index].length < minStringLength)
      minStringLength = strs[index].length;
  }
  let res: string = "";
  //looping for every impossible letter in smallest string
  for (let charIndex = 0; charIndex < minStringLength; charIndex++) {
    // set a counter to make sure the letter is common in every string
    let inAll = 1;
    // loop for check the charIndex letter in every string entered
    for (let index = 1; index < strs.length; index++) {
      if (strs[0].charAt(charIndex) === strs[index].charAt(charIndex)) {
        inAll++;
      }
    }
    // if the counter is equal the length means it move in all strings and the letter is common
    if (
      inAll === strs.length &&
      res.length == 0 &&
      strs[0].charAt(charIndex) == strs[0].charAt(0)
    ) {
      res += strs[0].charAt(charIndex);
    } else if (
      inAll === strs.length &&
      strs[0].charAt(charIndex - 1) == res[res.length - 1]
    ) {
      res += strs[0].charAt(charIndex);
    }
  }

  if (res.length > maxRes) {
    maxRes = res.length;
    AllRes = res;
  }
  console.log(AllRes);
  return "";
}

console.log(longestCommonPrefix(["flower", "fkow"]));
