let n = 5;
for (let i = 1; i <= n; i++) {
  if (i === 1 || i === n) {
    console.log('*'.repeat(i));
  } else {
    console.log('*' + ' '.repeat(i - 2) + '*');
  }
}
