# **Web3Cohort**

`Cohort 3.0 by 100xdevs!`

# [week 1: Introduction](https://projects.100xdevs.com/tracks/web3-orientation/Web3-Cohort---Orientation-1)

- [YT - Bitcoin whitepaper animation](https://www.youtube.com/watch?v=NoqNhWnjE1Q)
    <hr>

# [week 2: Public Key Cryptography](https://projects.100xdevs.com/tracks/public-private-keys/Public-Key-Cryptography-1)

- ```js
  const bytesOne = new Uint8Array([2, 5, 6, 257]); // it takes less memory than the tradional array.
  ```
  ```js
  output: Uint8Array(4)[(2, 5, 6, 1)]; // 257 is converted to 1 because it is 8-bit.
  ```
- `UInt8Array Enforces constraints`

  - It makes sure every element doesn’t exceed 255.
  - If it does, it wraps around to 0.
  - That is Modulo 256.
  - That is why 257 becomes 1 (257 % 256 = 1).

- ```js
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
<hr>

# Week 2 Assignment: [_Pouch: An open-source HD wallet generator for Sol and Eth._](https://web3pouch.vercel.app/)

- [GitHub](https://github.com/tsahil01/web3-wallet/)
- Main Wallet Logic: [src/config/mainConfig.ts](https://github.com/tsahil01/web3-wallet/blob/main/src/config/mainConfig.ts)

<hr>

# [week 3: Creating a web based wallet, RPCs](https://projects.100xdevs.com/tracks/web-wallet-rpc/Creating-a-web-based-wallet--RPCs-1)

<hr>

# [week 4: Solana programs , accounts and the token program Confirmation](https://petal-estimate-4e9.notion.site/Solana-Jargon-Programming-model-Tokens-45937002d4c24cda9d02fc02a6dedc1c)
- `Watch the Offline video (week 4.2) only`
- [Must Read: Solana, Eth, Coins, Tokens, Smart Contract](https://chatgpt.com/share/391916b3-071e-40e8-b712-6548752de813)

## My Class Notes: 

### **How is Eth/ Solana different from bitcoin?**

  - blockchain only have decentralised money.
  - Eterium introduced smart contracts. Which are written in solidity.
  - which means rather than having different blockchains for different purposes, use our ethe block chain and build your product on top of it.
  - On Solana there are Programs. And on Eth it's called Smart contracts.
  - http servers are deployed on azure/ AWS/ gcp
  - smart contracts/ programs are deployed on blockchains.
  - Solana works slightly different than other blockchains.


### **ACCOUNTS ON SOLANA:**
  - Account on solana blockchains is a fundamental DS used to store various types of information.
  - account can store solana (money)
  - an solana can store some data as well.
  - it can be executable or not.
  - data and programs are stored differently in different accounts.

### **RENT ON SOLANA BLOCKCHAIN -**
  - See comments of video, not in class notes.
  - to stored data on solana blockchain (various minor machines) we need to pay something, that is what we call it as rent.

## **AI Generated Notes:**
Here's an explanation of the key points from your notes in simple terms:

### How Ethereum and Solana Differ from Bitcoin:

- **Bitcoin:** 
  - Bitcoin is mainly about digital money that is decentralized, meaning no single entity controls it. It's like a digital version of cash that people can use to send money to each other without needing a bank.

- **Ethereum (Eth):**
  - Ethereum takes things further by introducing something called "smart contracts." These are like computer programs that run on the blockchain, making decisions automatically based on certain conditions. For example, you could create a smart contract to automatically release payment when a job is completed.
  - Instead of creating a new blockchain for every different use, Ethereum lets you build your application directly on its blockchain using these smart contracts.

- **Solana:**
  - Solana is another blockchain like Ethereum but uses a slightly different system. Instead of "smart contracts," it has "programs" that serve a similar purpose.

### Where Things Are Deployed:

- **Web Servers:** 
  - Normally, when you deploy a website or an app, you might use cloud services like Azure, AWS (Amazon Web Services), or GCP (Google Cloud Platform).

- **Smart Contracts/Programs:** 
  - In the blockchain world, when you create a smart contract (on Ethereum) or a program (on Solana), you deploy it on the blockchain itself instead of a traditional server.

### Solana's Unique Features:

- **Accounts on Solana:**
  - On the Solana blockchain, an "account" is like a storage unit where information is kept. These accounts can store:
    - Money (Solana tokens)
    - Data (information)
  - Some accounts can run programs (like the smart contracts on Ethereum), and some just store data without running anything.
  - On Solana, data and programs are stored in different accounts, meaning they're kept separate.

- **Rent on Solana:**
  - To store data on the Solana blockchain, you need to pay a fee. This fee is called "rent." It's like paying for storage space to keep your data on the blockchain. The rent is used to compensate the network for using its resources.

This breakdown explains the key concepts and differences in an easy-to-understand way.