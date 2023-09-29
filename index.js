// const logger = (x) => x + 1
// logger((1) => x + 1)

// const a = logger =() => { x + 1 })
//.then((x) => { console.log(x)

//}).catch((err) => {

// });
Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => console.log(x))
  .then();
const b = Promise.resolve(1).then((x) => x + 1);
// .then((x) => console.log(x))
// .then()
