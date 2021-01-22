const total = 42 + 42;
console.log(total);

console.log(typeof true);
console.log(typeof 42);
console.log(typeof 9007199254740992n);
console.log(typeof "JavaScript");
console.log(typeof Symbol("シンボル"));
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof ["配列"]);
console.log(typeof { "key": "value" });
console.log(typeof function() {});

const str = "こんにちわ"
console.log(str);

console.log(1);
console.log(0b1111);
console.log(Number.MAX_SAFE_INTEGER);

console.log(1n);
console.log(9007199254740992n);

console.log("文字列");
console.log('文字列');
console.log(`文字列`);

console.log("複数行の\n文字列を\n入れたい");
console.log(`ES15以降は
改行も
簡単`);

console.log(`これは${str}です`);

const abc = new String("文字列");
console.log(typeof abc);
console.log(abc.length);

const bcd = "文字列";
console.log(typeof bcd);
console.log(bcd.length);