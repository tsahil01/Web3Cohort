# Web3Cohort
`Cohort 3.0 by 100xdevs!`

### [week 1: Introduction](https://projects.100xdevs.com/tracks/web3-orientation/Web3-Cohort---Orientation-1)
- [YT - Bitcoin whitepaper animation](https://www.youtube.com/watch?v=NoqNhWnjE1Q)
    
### [week 2: Public Key Cryptography](https://projects.100xdevs.com/tracks/public-private-keys/Public-Key-Cryptography-1)
-   ```js
    const bytesOne = new Uint8Array([2, 5, 6, 257]); // it takes less memory than the tradional array.
    ```
    ```js
    output: Uint8Array(4) [2, 5, 6, 1] // 257 is converted to 1 because it is 8-bit.
    ```
- `UInt8Array Enforces constraints` 
    - It makes sure every element doesn’t exceed 255. 
    - If it does, it wraps around to 0. 
    - That is Modulo 256. 
    - That is why 257 becomes 1 (257 % 256 = 1).

-  ```js
    let y = 12;

    y.toString(); // decimal
    > '12'

    y.toString(2); // binary
    > '1100'

    y.toString(8); // octal
    > '14'

    y.toString(16); // hexadecimal
    > 'c'
    ```
- In ASCII: `1 character(byte) = 8 bits`
- In Hexadecimal: `1 character = 4 bits`
- In Base64: `1 character = 6 bits`
- In Base58: `1 character = 5.86 bits`