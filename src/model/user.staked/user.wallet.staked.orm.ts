import { TumDataSource  } from "../../data-source";
import { UserWallet } from "../user/entity/user.wallet.entity";
import { UserWalletMap } from "../user/entity/user.wallet.map.entity";
import { nearStaked } from "./chain/user.wallet.staked.near.service";
import { WalletStaked } from "./entity/user.wallet.staked.entity";

export async function GetWalletAddress(userId: number) {
    const wallet = await TumDataSource.manager.find(UserWallet, {where: {id: userId}}) 
    console.log(wallet[0].address);
    const mapRepository = TumDataSource.manager.getRepository(UserWalletMap)
    const mapInfo = await mapRepository.find({
        relations: {
            user: true,
        }
    })
    console.log(mapInfo[0].id);
    const mapId: any = mapInfo[0].id
    nearStaked(wallet[0].address, mapId)
}

export async function RegisterUsetWalletStaked(staked: string, mapId: UserWalletMap) {
    const newUserWalletStaked = await TumDataSource.manager.create(WalletStaked, {
        staked: staked,
        userWalletMap: mapId
    })
    await TumDataSource.manager.save(newUserWalletStaked)
    console.log("Saved a new user with name: " + newUserWalletStaked.staked)
}
