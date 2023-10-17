type romanObjectType = {
  [index: string]: number;
};
type SubObject = {
  [index: string]: string[];
};
function romanToInt(s: string): number {
  let res: number = 0;
  const romanObject: romanObjectType = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const subNumber: SubObject = {
    I: ["X", "V"],
    X: ["L", "C"],
    C: ["D", "M"],
  };
  const inputArray: string[] = s.toLocaleUpperCase().split("");
  for (let i = 0; i < inputArray.length; i++) {
    if (
      typeof subNumber[inputArray[i]] == "object" &&
      subNumber[inputArray[i]].indexOf(inputArray[i + 1]) !== -1
    ) {
      res -= romanObject[inputArray[i]];
    } else {
      res += romanObject[inputArray[i]];
    }
  }
  return res;
}
console.log(romanToInt("IVVI"));
