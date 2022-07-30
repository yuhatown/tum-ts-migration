import { TumDataSource } from "../../../data-source";
import { UserWalletMap } from "./user.wallet.map.orm-entity";

export async function GetUserWalletMap(userId: number){
    const userWalletRepository = TumDataSource.manager.getRepository(UserWalletMap)
    const userWalletList = await userWalletRepository.find({
        where: {
            user: {id: userId}
        },
        relations: {
            user: true,
            userWallet: true
        }
    }) 
    console.log(userWalletList);
}

export async function RegisterUserWalletMap(userId: number, walletId: number) {
    const newUserWalletMap = TumDataSource.manager.create(UserWalletMap, {
        user: {id: userId},
        userWallet: {id: walletId},
      });
      await TumDataSource.manager.save(newUserWalletMap);
      console.log("Saved a new user with id: " + newUserWalletMap.id);
}

export async function DeleteUserWalletMap(mapId: number) {
    await TumDataSource.manager.delete(UserWalletMap, { id: mapId });
}