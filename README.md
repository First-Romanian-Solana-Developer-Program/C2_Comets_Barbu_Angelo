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
   - [Course 5 - Create Token Metadata](#course-5---create-token-metadata)
   - [Course 6 - Rust](#course-6---rust)
4. [Project](#project)

---

## Introduction

Personal repository with my progress during the First Romanian Solana Developers Program C2, containing the implementation of the courses' labs and the project. The repository is forked to the program's organisation.

## Prerequisites

The following prerequisites apply for a macOS 15 system.
- [Node.js 20](https://nodejs.org/en/download/)
- [Rust 1.76](https://www.rust-lang.org/tools/install)
- [Solana CLI 1.18](https://crates.io/crates/solana-cli)
- [Anchor 0.3](https://crates.io/crates/anchor-lang/0.30.0)

For Windows systems, [Windows Subsystem for Linux 2](https://learn.microsoft.com/en-us/windows/wsl/install) is required.

## Course Labs

### Course 1 - Loading and Saving Keypairs

**Dependencies:**
- @solana/web3.js
- @solana-developers/helpers
- esrun
- dotenv

1. Install dependencies
```bash
npm install
 ```

2. Run key generator script
```bash
npx esrun generate-keypair.ts
 ```

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

4. Run key loader script
```
npx esrun load-keypair.ts
```


### Course 2 - Using Solana Devnet

**Dependencies**
- @solana-developers/helpers
- @solana/web3.js
- esrun
- dotenv

1. Install dependencies
```bash
npm install
```

2. Checking account balance using Solana CLI
```bash
solana account <PUBLIC_KEY>
```

3. Run check-balance.ts script
```bash
npx esrun check-balance.ts
```

**Utils**
- Config Solana Cluster to devnet
```bash
solana config set --url https://api.devnet.solana.com
```


### Course 3 - Transactions

**Dependencies:**
- @solana/web3.js
- @solana-developers/helpers
- @solana/spl-memo
- esrun
- dotenv

1. Install dependencies
```bash
npm install
```

2. Send airdrop to sender public key using [Solana Devnet Faucet]("https://faucet.solana.com") or *check-balance.ts* from [Course 2 - Using Solana Devnet](#course-2---using-solana-devnet)

3. Run transfer script
```bash
npx esrun transfer.ts
```

**Utils**
- Accounts, Transactions, Programs, Tokens, Blocks can be checked out at [Solana Explorer]("https://explorer.solana.com")


### Course 4 - Token Minting

**Dependencies:**
- @solana/web3.js
- @solana-developers/helpers
- @solana/spl-token
- esrun
- dotenv

1. Install dependencies
```bash
npm install
```

2. Create Token Mint
```bash
npx esrun create-token-mint.ts
```

3. Create a destination token account owned by another account
```bash
npx esrun create-token-account.ts
```

4. Mint tokens to the destination token account created previously
```bash
npx esrun mint-tokens.ts
```

5. Transfer tokens from one account to another
```bash
npx esrun mint-tokens.ts
```

- **Note: Important Public Keys**
```
TOKEN_MINT: "CzbDpanY5DBcMGwPETdm1N82cZ8cFMLj6NpwMFaXXLLW"
MINT_AUTHORITY: "65iHwGLu5SJjGfKRACwn28f4PJ15uWureEaFTUPKiBQ2"

SRC_ACCOUNT: "GENC37uWEWWKTitsUSDu4hth9xC7yUwxxN45oYbWYngn"
SRC_TOKEN_ACCOUNT: "2N5BAGtJqaEkPWLeNHKYDS5tha5Wouerzzm4DEARhPj7"
DST_ACCOUNT: "BMdqZbo8oJrHRps5SBvyJGSF7BCa6CNxgA7piumsxAim"
DST_TOKEN_ACCOUNT: "EvjmoASQ55j9jVAo1FBVz2wkKa3jwsveibhvd46tfUN5"
```
- Important Secret Keys available in .env file 


### Course 5 - Create Token Metadata
**Dependencies:**
- @metaplex-foundation/mpl-token-metadata
- @metaplex-foundation/umi-bundle-defaults
- @metaplex-foundation/umi-uploader-irys
- @solana/web3.js ^1.95.4
- @solana-developers/helpers
- esrun
- dotenv

**Contents:**
- *upload-image.ts* uploads the image off-chain and gets the URI
- *upload-metadata.ts* uploads the NFT's metadata offchain and gets the metadata's URI
- *mint-nft* mints the NFT containing the data, the metadata and the image for the NFT on-chain and gets the transaction ID
- *index.ts* mainfile used to call all the implemented functions and successfully mint the NFT

1. Install dependencies
```bash
npm install
```
2. Run the main script
```bash
npx esrun index.ts
```


### Course 6 - Rust
**Dependencies:**
- rust
- cargo
- rustlings

**Contents:**
- rustlings exercises finished from 00_intro to 09_strings.

1. Install and initialise rustlings
```bash
   cargo install rustlings
   rustlings init
```

2. Run rustlings to see exercises' progress
```bash
rustlings
```



## Project

TBA


