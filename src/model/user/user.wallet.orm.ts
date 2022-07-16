import { TumDataSource } from "../../data-source";
import { UserWallet } from "./user.wallet.entity";

const userRepository = TumDataSource.getRepository(UserWallet);

export async function RegisterUserWallet(
  userTokenId: number,
  userAddress: string
) {
  const newUserWallet = userRepository.create({
    tokenId: userTokenId,
    address: userAddress,
  });
  await userRepository.save(newUserWallet);
  console.log("Saved a new user with id: " + newUserWallet.id);
}

export async function UpdateUserWallet(
  userWalletId: number,
  userTokenId: number,
  userAddress: string
) {
  await userRepository.update(userWalletId, {
    tokenId: userTokenId,
    address: userAddress,
  });
}

export async function DeleteUserWallet(userWalletId: number) {
  await userRepository.delete({ id: userWalletId });
}
