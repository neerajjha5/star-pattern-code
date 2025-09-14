let n = 5;
for (let i = n; i >= 1; i--) {
  console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
}
