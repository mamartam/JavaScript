let str = "w3resource";
let res = str.split('');
console.log(res);
let lastChar = res.pop();
res.unshift(lastChar);
console.log(res);
