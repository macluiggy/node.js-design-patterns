
const myModule = (() => {
  const privateFoo = () => {}
  const publicBar = []

  const exported = {
    publicFoo: () => {},
    publicBar: () => {},
  }

  return exported
})()

console.log(myModule)
// console.log(myModule.privateFoo, myModule.privateBar);
;
