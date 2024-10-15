import 'dotenv/config';
import { getKeypairFromEnvironment } from '@solana-developers/helpers';
import {
    LAMPORTS_PER_SOL,
    PublicKey,
    Transaction,
    clusterApiUrl,
    Connection,
    sendAndConfirmTransaction,
    SystemProgram,
} from '@solana/web3.js';
import { createMemoInstruction } from '@solana/spl-memo';


const sender = getKeypairFromEnvironment("SECRET_KEY");
const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

console.log(`Sender public key: ${sender.publicKey.toString()}`);

const receiver = new PublicKey("FHWmMp8Lwdjakm1QgYS74ht9kFwzAjbLwsGsYeahHPaS");

const transaction = new Transaction()

const amount = 0.1;

const transferInstruction = SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey: receiver,
    lamports: amount * LAMPORTS_PER_SOL,
});

transaction.add(transferInstruction);

// const signature = await sendAndConfirmTransaction(connection, transaction, [sender]);

// console.log('Transaction confirmed:', signature);

const createMemo = createMemoInstruction('Hello, Solana!');

transaction.add(createMemo);

const signature = await sendAndConfirmTransaction(connection, transaction, [sender]);

console.log('Transaction confirmed after memo added:', signature);