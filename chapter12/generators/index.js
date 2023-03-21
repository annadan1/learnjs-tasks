function* pseudoRandom(seed) {
  let getValue = (num) => (num * 16807) % 2147483647;
  for (let i = getValue(seed); ;i = getValue(i)) yield i;
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073
