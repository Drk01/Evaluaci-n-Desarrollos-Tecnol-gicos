function Mayor(nums) {
  let mayor = 0;
  for (let i = 0; i < nums.length - 1; i++) {
      if (mayor < nums[i]) {
        mayor = nums[i]
    }
  }
  return mayor;
}

// 5000
console.log(Mayor([1, 2, 100, 5000, 14, -8]));
