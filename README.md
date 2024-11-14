# First Romanian Solana Developers Program C2
### Barbu Angelo-Gabriel - angelo.barbu123@gmail.com - 2024

---

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Course Labs](#course-labs)
   - [Course 1 - Loading and Saving Keypairs](#course-1---loading-and-saving-keypairs)
   - [Course 2 - Using Solana Devnet](#course-2---using-solana-devnet)
   - [Course 3 - Transactions](#course-3---transactions)
   - [Course 4 - Token Minting](#course-4---token-minting)
   - [Course 5 - Creating Token Metadata](#course-5---creating-token-metadata)
   - [Course 6 - Introduction to Rust](#course-6---introduction-to-rust)
   - [Course 7 - Local Program Development](#course-7---local-program-development)
   - [Course 8 - On-Chain Programming](#course-8---on-chain-programming)
   - [Course 9 - 10 - Anchor and Tokens](#course-9---10---anchor-and-tokens)
   - [Course 11 - Wallets and Frontend Development](#course-11---wallets-and-frontend-development)

---

<br>

## Introduction

Personal repository with my progress during the First Romanian Solana Developers Program C2, containing the implementation of the courses' labs and the project. The repository is forked to the program's organisation.

<br>

## Prerequisites

The following prerequisites apply for a macOS 15 system.
- [Node.js 20](https://nodejs.org/en/download/)
- [Rust 1.76](https://www.rust-lang.org/tools/install)
- [Solana CLI 1.18](https://crates.io/crates/solana-cli)
- [Anchor 0.3](https://crates.io/crates/anchor-lang/0.30.0)

For Windows systems, [Windows Subsystem for Linux 2](https://learn.microsoft.com/en-us/windows/wsl/install) is required.

---

<br> <br>

# Course Labs


## Course 1 - Loading and Saving Keypairs

**Dependencies:**
- @solana/web3.js
- @solana-developers/helpers
- esrun
- dotenv

---

**Commands:**
1. Install dependencies
```bash
npm install
 ```

<br>

2. Run key generator script
```bash
npx esrun generate-keypair.ts
 ```

<br>

3. Save generated secret key to .env file
```
SECRET_KEY="[
   36, 236,  50,  70,   4, 204, 164, 134,   3, 170, 249,
   58, 130,  54, 251, 194,  78, 134, 241,  33,  78,  79,
   61, 205, 150,  55, 234, 102, 251,  81, 149,   1,  75,
  127, 114, 102,  75, 237, 248,  23, 138, 134, 214,  86,
  223, 134,  81, 234, 229, 134,  90, 197,  35,  59, 228,
   65,  83,  11, 235,  43,  97, 207,  45, 167
]"
```

<br>

4. Run key loader script
```
npx esrun load-keypair.ts
```

<br> <br>

## Course 2 - Using Solana Devnet

**Dependencies**
- @solana-developers/helpers
- @solana/web3.js
- esrun
- dotenv

---

**Commands:**
1. Install dependencies
```bash
npm install
```

<br>

2. Checking account balance using Solana CLI
```bash
solana account <PUBLIC_KEY>
```

<br>

3. Run check-balance.ts script
```bash
npx esrun check-balance.ts
```

---

**Utils**
- Config Solana Cluster to devnet
```bash
solana config set --url https://api.devnet.solana.com
```

<br> <br>

## Course 3 - Transactions

**Dependencies:**
- @solana/web3.js
- @solana-developers/helpers
- @solana/spl-memo
- esrun
- dotenv

---

**Commands:**
1. Install dependencies
```bash
npm install
```

<br>

2. Send airdrop to sender public key using [Solana Devnet Faucet]("https://faucet.solana.com") or *check-balance.ts* from [Course 2 - Using Solana Devnet](#course-2---using-solana-devnet)

<br>

3. Run transfer script
```bash
npx esrun transfer.ts
```

---

**Utils**
- Accounts, Transactions, Programs, Tokens, Blocks can be checked out at [Solana Explorer]("https://explorer.solana.com")

<br> <br>

## Course 4 - Token Minting

**Dependencies:**
- @solana/web3.js
- @solana-developers/helpers
- @solana/spl-token
- esrun
- dotenv

---

**Commands:**
1. Install dependencies
```bash
npm install
```

<br>

2. Create Token Mint
```bash
npx esrun create-token-mint.ts
```

<br>

3. Create a destination token account owned by another account
```bash
npx esrun create-token-account.ts
```

<br>

4. Mint tokens to the destination token account created previously
```bash
npx esrun mint-tokens.ts
```

<br>

5. Transfer tokens from one account to another
```bash
npx esrun mint-tokens.ts
```

<br>

>*Note*: Important Public Keys
```
TOKEN_MINT: "CzbDpanY5DBcMGwPETdm1N82cZ8cFMLj6NpwMFaXXLLW"
MINT_AUTHORITY: "65iHwGLu5SJjGfKRACwn28f4PJ15uWureEaFTUPKiBQ2"

SRC_ACCOUNT: "GENC37uWEWWKTitsUSDu4hth9xC7yUwxxN45oYbWYngn"
SRC_TOKEN_ACCOUNT: "2N5BAGtJqaEkPWLeNHKYDS5tha5Wouerzzm4DEARhPj7"
DST_ACCOUNT: "BMdqZbo8oJrHRps5SBvyJGSF7BCa6CNxgA7piumsxAim"
DST_TOKEN_ACCOUNT: "EvjmoASQ55j9jVAo1FBVz2wkKa3jwsveibhvd46tfUN5"
```
>Important Secret Keys available in .env file 

<br> <br>

## Course 5 - Creating Token Metadata
**Dependencies:**
- @metaplex-foundation/mpl-token-metadata
- @metaplex-foundation/umi-bundle-defaults
- @metaplex-foundation/umi-uploader-irys
- @solana/web3.js ^1.95.4
- @solana-developers/helpers
- esrun
- dotenv

---

**Contents:**
- *upload-image.ts* uploads the image off-chain and gets the URI
- *upload-metadata.ts* uploads the NFT's metadata offchain and gets the metadata's URI
- *mint-nft* mints the NFT containing the data, the metadata and the image for the NFT on-chain and gets the transaction ID
- *index.ts* mainfile used to call all the implemented functions and successfully mint the NFT

---

**Commands:**
1. Install dependencies
```bash
npm install
```

<br>

2. Run the main script
```bash
npx esrun index.ts
```

<br> <br>

## Course 6 - Introduction to Rust
**Dependencies:**
- Rust
- Cargo
- Rustlings

---

**Contents:**
- rustlings exercises finished from *00_intro* to *09_strings* (including *quiz1*).

---

**Commands:**

1. Install and initialise rustlings
```bash
   cargo install rustlings
   rustlings init
```

<br>

2. Run rustlings to see exercises' progress
```bash
rustlings
```

<br> <br>

## Course 7 - Local Program Development
**Dependencies:**
- Rust
- Anchor
- Solana CLI
- Yarn

---

**Notes:**
- Downgrade to Solana 1.18.25 to have no issues with commands such as *anchor-build*, *solana-keygen* etc.

---

**Commands:**
1. Initialise Anchor project
```bash
   anchor init anchor_test --template single
```

<br>

2. Build Anchor project
```bash
   cd anchor_test
   anchor build
```

<br>

3. Deploy Program to Devnet
```bash
   anchor deploy --provider.cluster devnet
```

>*Note*: Make sure your program account has sufficient SOL balance (use [Solana Devnet Faucet]("https://faucet.solana.com")) and a Solana Keygen configured. If not, run:
```bash
   solana-keygen new -o /Users/user/.config/solana/id.json
```

<br>

4. Run test
```bash
   anchor test
```

>*Note*: Make sure your **Anchor.toml** cluster provider is *devnet* or use the flag *--provider.cluster devnet*.

<br> <br>

## Course 8 - On-Chain Programming
**Dependencies:**
- Rust
- Anchor
- Solana CLI
- Yarn

---

**Notes & Contents:**
- Downgrade to Solana 1.18.25 to have no issues with commands such as *anchor-build*, *solana-keygen* etc.
- Simple Solana Program that sets account's favorites and tests the method

---

**Commands:**
1. Run the test
```bash
   anchor test
```

<br> <br>

## Course 9 - 10 - Anchor and Tokens
**Dependencies:**
- Rust
- Anchor
- Solana CLI
- Yarn
- @solana-developers/helpers
- @solana/spl-token

---

**Notes & Contents:**
- Downgrade to Solana 1.18.25 to have no issues with commands such as *anchor-build*, *solana-keygen* etc.
- Solana Program working as an escrow that mediates the transfer between two entities that want to exchange tokens.

---

**Commands:**
1. Initialise Anchor project
```bash
   anchor init escrow --template=multiple
```

2. Install NPM dependencies
```bash
   npm install
```

3. Run the tests
```bash
   anchor test
```

<br> <br>

## Course 11 - Wallets and Frontend Development
**Dependencies:**
- Next.js
- React.js
- "@solana/web3.js"
- "@solana/wallet-adapter" libraries

---

**Notes & Contents:**
- NextJs project cloned from [this repository.](https://github.com/danielpavel/solana-ping-frontend.git)
- Added Connect button for Solana wallet.
- Added Bonus functionality to send amount of SOL to recipient address from the connected wallet.

---

**Commands:**
1. Install dependencies
```bash
   npm install
```

2. Build Next.js project
```bash
   npm run build
```

3. Start the project
```bash
   npm run start
```

>*Note:* Project is running on *localhost:3000*


