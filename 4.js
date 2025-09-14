let n = 3; // height of upper half (excluding the center line)

for (let i = 1; i <= n; i++) {
    let row = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
    console.log(row);
}
for (let i = n - 1; i >= 1; i--) {
    let row = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
    console.log(row);
}
