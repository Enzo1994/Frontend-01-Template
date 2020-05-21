var v8 = require("v8");
console.log(v8.getHeapSpaceStatistics());

let resolve;
const timeout = (delay) =>
  new Promise((res) => {
    setTimeout(() => {
      res();
    }, delay);
  });

const onMounted = () =>
  new Promise((res) => {
    console.log("res", res);
    resolve = res.bind(this, [{ a: 3 }]);
  });

void (async () => {
  var a = await onMounted();
  console.log(a, 3333);
})();

void (async () => {
  await timeout(3000);
  resolve();
})();

console.log(v8.getHeapSpaceStatistics());
