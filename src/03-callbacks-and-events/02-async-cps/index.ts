function additionAsync(a: number, b: number, callback: (result: number) => void) {
    setTimeout(() => {
        callback(a + b);
    });
}

console.log('before');
additionAsync(1, 2, (result) => console.log(`Result: ${result}`));
console.log('after');
