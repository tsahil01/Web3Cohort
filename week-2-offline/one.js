let word = "hello";

let bytes = new TextEncoder().encode(word);
console.log(bytes);

bytes = new Uint8Array([104, 101, 108, 108, 256]);

const decoder = new TextDecoder().decode(bytes);
console.log(decoder);
