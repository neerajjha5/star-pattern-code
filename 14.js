let n = 5;
for (let i = 1; i <= n; i++) {
  console.log(' '.repeat(n - i) + '*'.repeat(i));
}
for (let i = n - 1; i >= 1; i--) {
  console.log(' '.repeat(n - i) + '*'.repeat(i));
}
