import { TumDataSource } from "../../data-source";
import { UserWalletMap } from "./user.wallet.map.entity";

const userRepository = TumDataSource.getRepository(UserWalletMap);

export async function GetUserWalletMap(userId: number){
    const userWalletList = await userRepository.find({where: {id: userId}})   
    console.log(userWalletList);
}

export async function RegisterUserWalletMap(userId: number, walletId: number) {
    const newUserWalletMap = userRepository.create({
        userId: userId,
        walletId: walletId,
      });
      await userRepository.save(newUserWalletMap);
      console.log("Saved a new user with id: " + newUserWalletMap.id);
}

export async function DeleteUserWalletMap(mapId: number) {
    await userRepository.delete({ id: mapId });
}