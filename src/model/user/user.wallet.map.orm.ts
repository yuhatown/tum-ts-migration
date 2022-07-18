import { TumDataSource } from "../../data-source";
import { User } from "./entity/user.entity";
import { UserWallet } from "./entity/user.wallet.entity";
import { UserWalletMap } from "./entity/user.wallet.map.entity";

const userRepository = TumDataSource.getRepository(UserWalletMap);

export async function GetUserWalletMap(userId: number){
    const userWalletList = await userRepository.find({where: {id: userId}})   
    console.log(userWalletList);
}

export async function RegisterUserWalletMap(userId: User, walletId: UserWallet) {
    const newUserWalletMap = userRepository.create({
        user: userId,
        userWallet: walletId,
      });
      await userRepository.save(newUserWalletMap);
      console.log("Saved a new user with id: " + newUserWalletMap.id);
}

export async function DeleteUserWalletMap(mapId: number) {
    await userRepository.delete({ id: mapId });
}