/* eslint standard/no-callback-literal: 0 */

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(1, 2));

function addCps(a: number, b: number, callback: (result: number) => void): void {
  callback(a + b);
}

console.log('before');
addCps(1, 2, (result) => console.log(`Result: ${result}`));
console.log('after');

