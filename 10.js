let n = 5;
for (let i = 1; i <= n; i++) {
  if (i === n) {
    console.log('*'.repeat(2 * i - 1));
  } else {
    let spacesInside = i === 1 ? 0 : 2 * i - 3;
    console.log(' '.repeat(n - i) + '*' + ' '.repeat(spacesInside) + (i > 1 ? '*' : ''));
  }
}
