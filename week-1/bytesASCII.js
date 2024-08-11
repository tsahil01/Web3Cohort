// Uint8Array =>

// const bytesOne = new Uint8Array([2, 5, 6, 257]);
// bytesOne[1] = 400;
// const bytesTwo = [2, 5, 6, 700];
// console.log(bytesOne);
// console.log(bytesTwo);


// Bytes to ASCII =>

// function bytesToAscii(bytesArray){
//   return bytesArray.map(byte => String.fromCharCode(byte)).join()
// }
// console.log(bytesToAscii([72, 101, 108, 108, 111]))


// UInt8Array to ASCII =>

function bytesToAscii(byteArray) {
  return new TextDecoder().decode(byteArray);
}

// Example usage:
const bytes = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const asciiString = bytesToAscii(bytes);
console.log(asciiString); // Output: "Hello"
