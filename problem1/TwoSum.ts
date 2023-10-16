function twoSum(nums: number[], target: number): number[] {
  const res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (
        nums[i] + nums[j] == target &&
        !res.includes(i) &&
        !res.includes(j) &&
        i != j
      ) {
        res.push(i);
        res.push(j);
      }
    }
  }
  return res;
}

console.log(twoSum([1, 2, 3], 3));
