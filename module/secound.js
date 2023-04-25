export function arrayDiff(str) {
  const arr = str.split(';').map(s => s.split(',').map(Number));
  const mas1 = arr[0];
  const mas2 = arr[1];
  for (let i = 0; i < mas1.length; i++) {
      for (let y = 0; y < mas2.length; y++) {
          if (mas1[i] == mas2[y]) {
              mas1.splice(i, 1);
              y--;
          }
      }
  }
  return mas1.join(',');
}