function twoSum(nums: number[], target: number): number[] {
  const res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (
        nums[i] + nums[j] == target &&
        res.indexOf(i) == -1 &&
        res.indexOf(j) == -1 &&
        i != j
      ) {
        res.push(i);
        res.push(j);
      }
    }
  }
  return res;
}

console.log(twoSum([2, 7, 11, 15], 9));
