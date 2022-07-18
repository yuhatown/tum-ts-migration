import { TumDataSource } from "../../data-source";
import { UserWalletMap } from "./entity/user.wallet.map.entity";

export async function GetUserWalletMap(userId: UserWalletMap){
    const userWalletRepository = TumDataSource.manager.getRepository(UserWalletMap)
    const userWalletList = await userWalletRepository.find({
        relations: {
            user: true,
            userWallet: true
        },
        where: {
            user: userId
        }
    }) 
    console.log(userWalletList);
}

export async function RegisterUserWalletMap(userId: UserWalletMap, walletId: UserWalletMap) {
    const newUserWalletMap = TumDataSource.manager.create(UserWalletMap, {
        user: userId,
        userWallet: walletId,
      });
      await TumDataSource.manager.save(newUserWalletMap);
      console.log("Saved a new user with id: " + newUserWalletMap.id);
}

export async function DeleteUserWalletMap(mapId: number) {
    await TumDataSource.manager.delete(UserWalletMap, { id: mapId });
}