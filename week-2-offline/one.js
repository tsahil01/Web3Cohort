let a = "hd";

const binaryRespresentaion = new TextEncoder().encode(a);

// console.log(binaryRespresentaion);

function arrayToHex(arr) {
  let hexString = "";
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    hexString += arr[i].toString(16).padStart(2, "0");
  }
  return hexString;
}

let b = ""

const binaryRespresentaionTwo = new TextEncoder().encode(b);
console.log(arrayToHex(binaryRespresentaionTwo));
