function additionAsync(a: number, b: number, callback: (result: number) => void) {
    setTimeout(() => {
        callback(a + b);
    });
}

console.log('before');
additionAsync(1, 2, (result) => console.log(`Result: ${result}`));
console.log('after');

let a
console.log('before', a);
additionAsync(1, 2, (result) => {
  a= result
  console.log('during', a);
  return a
});
console.log('after', a);
