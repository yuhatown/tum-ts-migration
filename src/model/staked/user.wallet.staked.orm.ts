import { TumDataSource  } from "../../data-source";
import { UserWallet } from "../user/entity/user.wallet.entity";
import { UserWalletMap } from "../user/entity/user.wallet.map.entity";
import { nearStaked } from "./chain/user.wallet.staked.near.service";
import { WalletStaked } from "./entity/user.wallet.staked.entity";

export async function GetWalletAddress(userId: number, walletId: number) {
    const walletRepository = await TumDataSource.manager.getRepository(UserWallet)
    const wallet = await walletRepository.find({
        relations: {
            token: true
        }
    })
    const tokenId: any = wallet[0].token.id
     
    const mapRepository = TumDataSource.manager.getRepository(UserWalletMap)
    const mapInfo = await mapRepository.find({
        where: {
            user: { id: userId },
            userWallet: { id: walletId }
        },
        relations: {
            user: true,
            userWallet: true
        }
    })
    const mapId: any = mapInfo[0].id
    console.log(mapId);
    

    nearStaked(wallet[0].address, mapId, tokenId)
}

export async function RegisterUsetWalletStaked(staked: string, mapId: UserWalletMap, tokenId: WalletStaked) {
    const newUserWalletStaked = await TumDataSource.manager.create(WalletStaked, {
        staked: staked,
        userWalletMap: mapId,
        token: tokenId
    })
    await TumDataSource.manager.save(newUserWalletStaked)
    console.log("Saved a new user with stakedValue: " + newUserWalletStaked.staked)
}
