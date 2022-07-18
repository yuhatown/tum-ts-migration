import { TumDataSource } from "../../data-source";
import { Token } from "../token/entity/token.entity";
import { UserWallet } from "./entity/user.wallet.entity";

export async function RegisterUserWallet(
  relationToken: string,
  userAddress: string
) {
  const tokenIdRelation = TumDataSource.manager.create(Token, {
    name: relationToken,
  })
  await TumDataSource.manager.save(tokenIdRelation)

  const newUserWallet = TumDataSource.manager.create(UserWallet, {
    address: userAddress,
    token: tokenIdRelation,
  })
  await TumDataSource.manager.save(newUserWallet)
  console.log("Saved a new user with id: " + newUserWallet.id);
}

export async function UpdateUserWallet(
  userWalletId: number,
  userTokenId: Token,
  userAddress: string
) {
  await TumDataSource.manager.update(UserWallet, userWalletId, {
    token: userTokenId,
    address: userAddress
  })
}

export async function DeleteUserWallet(userWalletId: number) {
  await TumDataSource.manager.delete(UserWallet, userWalletId)
}
