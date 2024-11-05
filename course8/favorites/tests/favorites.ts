import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Favorites } from "../target/types/favorites";

import { assert } from "chai";
import web3 = anchor.web3;

describe("favorites", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const user = (provider.wallet as anchor.Wallet).payer;
  const program = anchor.workspace.Favorites as Program<Favorites>;

  before(async () => {
    const balance = await provider.connection.getBalance(user.publicKey);
    const balanceInSOL = balance / web3.LAMPORTS_PER_SOL;
    const formattedBalance = new Intl.NumberFormat().format(balanceInSOL);
    console.log(`Balance of ${balanceInSOL} SOL for ${user.publicKey}`);
  });

  it("Save a user's favorites to the blockchain!", async () => {
    // Add your test here.
    const favoriteNumber = new anchor.BN(23);
    const favoriteColor = "blue";
    const favoriteHobbies = ["reading", "swimming", "coding"];

    let txHash = await program.methods
    .setFavorites(favoriteNumber, favoriteColor, favoriteHobbies)
    .signers([user])
    .rpc();

    console.log("Transaction hash:", txHash);

    const [favoritesPda, favoritesBump] = web3.PublicKey.findProgramAddressSync(
      [Buffer.from("favorites"), user.publicKey.toBuffer()],
      program.programId
    );

    const favoritesAccount = await program.account.favorites.fetch(favoritesPda);

    assert.equal(favoritesAccount.number.toNumber(), favoriteNumber.toNumber());
    assert.equal(favoritesAccount.color, favoriteColor);
    assert.deepEqual(favoritesAccount.hobbies, favoriteHobbies);
  });
});
