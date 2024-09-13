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

- bitcoin only have decentralised money.
- ethereum introduced smart contracts. Which are written in solidity.
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

- See comments of video, not in class notes. - [Link](https://www.quicknode.com/guides/solana-development/getting-started/understanding-rent-on-solana)
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
  - It is refundable.
  - That is we have to maintain minimum balance in our account to keep it alive.
  - If we don't have enough balance, our account will be deleted.
  - This is to prevent spamming on the network.

This breakdown explains the key concepts and differences in an easy-to-understand way.

<hr>

### Solana CLI Commands:

- `solana --version` - to check the version of solana.
- `solana-test-validator` - to start a local testnet.
- `solana-test-validator --reset` - to reset the local testnet.
- `solana-keygen new` - to generate a new keypair. Stored in `~/.config/solana/` directory.
- `solana address` - to get the address of the keypair.
- `solana config get` - to get the current configuration.
- `solana balance` - to get the balance of the account.
- `solana airdrop 1 ` - to get 1 SOL in the account. (only works on devnet and testnet)

### Solana Devnet, Mainnet, Testnet:

- RPC calls are made to the network to get the data.
- So we have different networks for different purposes.
- We need to change the `RPC endpoint` to switch between networks.

- **Devnet:**

  - Development network.
  - For testing and development.
  - No real money involved.
  - Fast and free transactions.
  - To change RPC enpoint URL: `solana config set --url https://api.devnet.solana.com` - to set the devnet.

- **Testnet:**

  - For testing.
  - Real money involved.
  - Slow and expensive transactions.
  - To change RPC enpoint URL: `solana config set --url https://api.testnet.solana.com` - to set the testnet.
  - This runs on our local machine. Which has local RPC endpoint like `http://localhost:8899`.

- **Mainnet:**
  - The main network.
  - Real money involved.
  - Slow and expensive transactions.
  - To change RPC enpoint URL: `solana config set --url https://api.mainnet-beta.solana.com` - to set the mainnet.

To run on local RPC endpoint: `solana config set --url http://localhost:8899`

<hr>

### Common Solana CLI Commands:

Solana CLI is a powerful tool for interacting with the Solana blockchain, managing accounts, deploying smart contracts, and more. Here’s a list of common **Solana CLI** commands and their descriptions:

### **Account and Wallet Management**

1. **Create a New Keypair (Wallet)**

   ```bash
   solana-keygen new
   ```

   This command generates a new keypair (public and private key) and stores it locally.

2. **Show Your Public Key**

   ```bash
   solana address
   ```

   Displays the public key of your default wallet.

3. **Show Account Balance**

   ```bash
   solana balance
   ```

   Displays the SOL balance of the default wallet or a specified public key.

4. **Airdrop SOL**

   ```bash
   solana airdrop <amount> <recipient_public_key>
   ```

   Requests an airdrop of SOL to your account (usually works on testnet and devnet).

5. **Transfer SOL**

   ```bash
   solana transfer <recipient_public_key> <amount>
   ```

   Transfers SOL from your default wallet to another public key.

6. **Show Wallet Details**
   ```bash
   solana account <public_key>
   ```
   Displays detailed information about an account, such as balance and ownership.

### **Network Management**

7. **Set CLI to Devnet/Testnet/Mainnet**

   - **Devnet:**
     ```bash
     solana config set --url https://api.devnet.solana.com
     ```
   - **Testnet:**
     ```bash
     solana config set --url https://api.testnet.solana.com
     ```
   - **Mainnet:**
     ```bash
     solana config set --url https://api.mainnet-beta.solana.com
     ```

8. **Check Current Network Configuration**

   ```bash
   solana config get
   ```

   Shows the current network URL, wallet path, and other configurations.

9. **Ping a Solana Cluster**
   ```bash
   solana ping
   ```
   Sends a transaction to confirm the connectivity and latency with the current cluster.

### **Program (Smart Contract) Deployment**

10. **Build and Deploy a Program**

    ```bash
    solana program deploy <path_to_program_binary>
    ```

    Deploys a compiled Solana program (smart contract) to the blockchain.

11. **Check Program Details**

    ```bash
    solana program show <program_id>
    ```

    Shows details about a deployed program (owner, balance, etc.).

12. **Close a Program**
    ```bash
    solana program close <program_id>
    ```
    Closes a program and refunds its rent balance to the program owner.

### **Validator and Network Operations**

13. **Check Cluster Version**

    ```bash
    solana --version
    ```

    Displays the Solana CLI version and the network cluster version.

14. **Check Cluster Health**

    ```bash
    solana validators
    ```

    Lists the current validators on the network and their status.

15. **Vote on Behalf of a Validator**
    ```bash
    solana vote-authorize-voter <vote_account> <new_voter>
    ```
    Updates the authorized voter for a validator vote account.

### **Token Management (SPL Tokens)**

16. **Create a New Token**

    ```bash
    spl-token create-token
    ```

    Creates a new SPL token (Solana Program Library token).

17. **Create a Token Account**

    ```bash
    spl-token create-account <token_mint_address>
    ```

    Creates a token account to hold the specified token.

18. **Mint New Tokens**

    ```bash
    spl-token mint <token_mint_address> <amount> <recipient_public_key>
    ```

    Mints new tokens of the specified SPL token to a recipient's account.

19. **Transfer Tokens**

    ```bash
    spl-token transfer <token_mint_address> <amount> <recipient_account>
    ```

    Transfers SPL tokens from your token account to another account.

20. **Check Token Account Balance**
    ```bash
    spl-token balance <token_account_address>
    ```
    Displays the balance of a specified SPL token account.

These are some of the most common commands for managing accounts, interacting with the network, deploying programs, and handling tokens on Solana. You can always use the `--help` flag for more details about any command.

<hr>

### Solana Data Model:

- We know that a account on solana can be set to executable or not.
- If it is executable, it can run a program. That is how we deploy a program on solana.
- If it is not executable, it can store data.
- ![solana data model](/MD-data/image.png)
- In web2 world we store our code to AWS/ Azure/ GCP. And we store our data to databases. That is, in different places.
- In web3 world we store our code and data in `different accounts`.
- On Solana, if there is an Account which has `executable` set to `true`, and it has data, that data is stored in different account. That is what we can see in the image.

- Watch: [Harkirat Singh - Programming on Solana | Program Derived addresses and Cross Program Invocation](https://www.youtube.com/watch?v=p0eD29d8JCM)

<hr>

## AI Notes:

### Solana Data Model

- **Account Types:**

  - **Executable Accounts:**
    - Can run programs.
    - Used to deploy programs on Solana.
  - **Non-Executable Accounts:**
    - Used to store data.

- **Web2 vs. Web3 Storage:**

  - **Web2:**
    - Code is stored on AWS, Azure, GCP, etc.
    - Data is stored in databases.
  - **Web3 (Solana):**
    - Code and data are stored in different accounts.
    - On Solana, if an account is `executable` and contains data, that data is actually stored in a separate account.

- **Visual Reference:**
  - ![solana data model](/MD-data/image.png)

1. **Accounts in Solana:**

   - Solana operates on an **account-based model** where each account can either store data or execute programs.
   - **Executable accounts** are used to deploy and execute programs, while **non-executable accounts** store state or other types of data.

2. **Web2 vs. Web3 Storage Comparison:**

   - In **Web2**, code (for running applications) is stored separately (on cloud platforms like AWS/Azure/GCP), and data is stored in databases.
   - In **Web3** (specifically Solana), programs (code) are stored in **executable accounts**, and the data they manage is stored in **non-executable accounts**.

3. **Account Relationships:**
   - In Solana, if an account is marked as executable, it doesn’t store the data directly. Instead, the **data associated with that program is stored in different (non-executable) accounts**.
   - The image you referred to likely illustrates how program accounts and data accounts are structured.

- **Additional Resource:**
  - Watch: [Harkirat Singh - Programming on Solana | Program Derived Addresses and Cross Program Invocation](https://www.youtube.com/watch?v=p0eD29d8JCM)

<hr>

### Token Program on Solana: (for steps - [link](https://petal-estimate-4e9.notion.site/Creating-a-token-b62f51d3b97e4706b8efd9cf432832e8))

- Engineer at Solana created a token program. (which is like a smart contract on ethereum)
- This program is deployed on the solana blockchain.
- USDT & USDC are not a blockchain. They are tokens deployed on the solana blockchain using this token program.
- USDT and USDC are deployed on the some blockchain using this token program.
- Whatever we want to do on a new token, we can do it on a exising token as well.
- Which means in the below image, Solana folks create a token program. And they deployed USDT and USDC on top of it.
- So a Mint Account is created for USDT and USDC. And then we can create token accounts for USDT and USDC.
  ![tokenSolana](/MD-data/image2.png)
- CLI commands to create a token: `spl-token create-token` - to create a new token.
- ![spl-token](/MD-data/image3.png)
- by default, the decimals are set to 9. Which means we can have 9 decimal points in the token.
- ![token](/MD-data/image4.png)
- What we did here is, we created a token just like USDT and USDC. And we can do the same things with this token as well.
- Now we will create a assocaited token account for this token. Just like a user has a bank account, this token has an account.
- All these above things are quite easy.
- **Example: We have RBI, which is a mint account. And we have a bank account, which is a token account. And we have a user, which is a user account.**
- **RBI -> Bank -> User**
- **Mint Account -> Token Account -> User Account**
- Watch the Class video for better understanding.

- ![image](https://github.com/user-attachments/assets/895a8383-5107-4436-b0a8-81684ae2cc78)

<hr>

## A quick understanding of the Solana Token Program:

- User **A** creates a token with address **B**, and by default, **A** becomes the owner of token **B**. As the owner, A has the authority to mint new tokens, effectively increasing the supply of token **B**.
  To do this, **A** first creates a token account with address **C** for holding token **B**. Once the token account **C** is created, **A**, as the owner, can mint new tokens (e.g., increase the supply by 20) and store these newly minted tokens in **C**.

```sh
spl-token create-token
```

![alt text](/MD-data/image5.png)

```sh
spl-token create-account Bbbbbbb
```

![alt text](/MD-data/image6.png)

```sh
spl-token mint Bbbbbbb 20 Ccccccc
```

![alt text](/MD-data/image7.png)

- Here first process of creating a token is called **minting**. Just like RBI create new money (paisa chaapna).
- Second process is **creating a token account**. Just like a user creates a bank account.
- Third process is **minting new tokens**. Just like a user deposits money in his bank account.

## AI Notes:

### Notes on Solana Token Program

#### Overview:

- The **Solana Token Program** is akin to a smart contract on Ethereum and is deployed on the Solana blockchain.
- It allows users to create and manage tokens (e.g., USDT, USDC) on Solana.
- USDT and USDC, while well-known tokens, are not blockchains themselves; they are tokens created using the Solana Token Program.

#### Key Concepts:

1. **Token Program**:

   - Developed by Solana engineers and deployed on the Solana blockchain.
   - It’s the foundation for creating tokens on Solana, similar to how smart contracts work on Ethereum.

2. **USDT & USDC**:
   - Both are tokens built using this program, which means they follow the same protocol as any custom token deployed on Solana.
   - USDT and USDC have their own **Mint Accounts**, which is like the central authority managing these tokens.
   - Users can create **Token Accounts** associated with these tokens to manage their holdings.
3. **Mint and Token Accounts**:
   - **Mint Account**: Like a central bank account (such as the RBI), responsible for minting new tokens.
   - **Token Account**: Like a user’s bank account where individual token balances are stored.
   - **User Account**: An account that interacts with token accounts for transfers or other operations.
   <hr>

**`My Analogy:`**

Yes, your analogy is mostly correct, and you’ve captured the core concepts! Here's a refined explanation based on your thoughts:

### 1. **Mint Account (like RBI)**

- **Your analogy**: RBI can create new money and control the supply.
- **Blockchain analogy**: A **mint account** is responsible for creating new tokens. It's like the central authority (or smart contract) that has the power to "mint" or create new tokens. In many cases, it controls the token supply (e.g., how many tokens exist).

### 2. **Token Account (like a user's bank account)**

- **Your analogy**: Each user has an account in the bank where they store their money.
- **Blockchain analogy**: A **token account** holds the balance of tokens for a user. This is similar to how a bank account stores money for a user. Token accounts track the number of tokens each user possesses.

### 3. **User Account (like the person or entity controlling the token account)**

- **Your analogy**: A user interacts with their bank account to perform transactions.
- **Blockchain analogy**: A **user account** represents the person or entity interacting with the token accounts. This is like a wallet or identity that can issue commands to transfer tokens between token accounts (e.g., sending, receiving, or interacting with decentralized applications).

So yes, your understanding is on point! The **Mint Account** controls token creation, **Token Accounts** store individual token balances, and the **User Account** (like a wallet) is what interacts with these token accounts to make transactions.

<hr>

4. **Token Creation Commands**:
   - CLI Command to create a token: `spl-token create-token`.
   - By default, tokens on Solana have **9 decimal points**, which allows for fractional ownership similar to cryptocurrencies like Bitcoin.

#### Steps for Token Creation:

1. **Token Creation**:

   - You create a token (just like USDT/USDC) using the Solana CLI with the command `spl-token create-token`.
   - A **Mint Account** is generated for this token, similar to how USDT and USDC have their own mint accounts.

2. **Associated Token Account Creation**:
   - A **Token Account** is created for this new token.
   - This token account acts like a bank account for users to hold or transact with the new token.

#### Example Explanation:

- To better understand this concept, think of the following analogy:
  - **RBI (Mint Account)** -> **Bank (Token Account)** -> **User (User Account)**
  - The mint account represents the authority to issue tokens, the token account stores those tokens, and the user account allows interaction with them.

### Visualization:

- In the diagram mentioned:
  - Solana created the **Token Program**.
  - Using this program, **USDT** and **USDC** were deployed, with mint accounts generated for both tokens.
  - Token accounts were then created for users to store and transfer their USDT and USDC balances.

### Conclusion:

The Solana Token Program allows users to create tokens and manage them efficiently, similar to how tokens like USDT and USDC are managed. The process of token creation, minting, and account setup is straightforward using Solana's CLI tools. The analogy with a central bank, banks, and users helps clarify how mint accounts, token accounts, and user accounts work together.

<hr>
<hr>

# [Week 5: Wallet adapter](https://petal-estimate-4e9.notion.site/Wallet-adapter-860feade9cb940cea696eedf4fc61251)

- You can follow to create faucet: [link](https://github.com/anza-xyz/wallet-adapter/blob/master/APP.md)
- See `/week-5` folder for the code.
<hr>

# [Week 6: Creating a Solana Token LaunchPad](https://petal-estimate-4e9.notion.site/Token-launchpad-in-react-f0027bd023d4467ab5eb87d16ab21b40)

- **Transaction** is a bunch of **Instructions** that are sent to the blockchain.
- Example: While creating a token, we have to send multiple instructions to the blockchain. Like creating a mint account, creating a token account, etc. All these instructions are sent in a single transaction.
- That is what Token LaunchPad is all about.

<hr>

# [Week 7: Ownership, Authorities, Programs and PDAs](https://petal-estimate-4e9.notion.site/Ownership-Authorities-Programs-and-PDAs-b2b8bfeae8064753982be9bd67afbb7b)

### Accounts on Solana: [Useul Link](https://solana.com/docs/core/accounts)
![alt text](/MD-data/image8.png)
![alt text](/MD-data/image9.png)

### System Program: [Useful Link](https://solana.com/docs/core/programs)
- When developing custom programs on Solana, you will commonly interact with two native programs, the System Program and the BPF Loader.
![alt text](/MD-data/image10.png)
-  Account is like tree structure. And the root account is the system account. And the system account has multiple child accounts. And these child accounts can have their own child accounts. And so on.

### BPF Loader:
- Owner of all the programs on the solana blockchain.

### Authority:
