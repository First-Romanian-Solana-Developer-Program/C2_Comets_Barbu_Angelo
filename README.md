# First Romanian Solana Developers Program C2
### Barbu Angelo-Gabriel - angelo.barbu123@gmail.com - 2024

---

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Course Labs](#course-labs)
   - [Course 1 - Loading and Saving Keypairs](#course-1---loading-and-saving-keypairs)
   - [Course 2 - Using Solana Devnet](#course-2---using-solana-devnet)
   - [Course 3](#course-3)
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




### Course 3

TBA

## Project

TBA


