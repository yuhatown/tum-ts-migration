import { TumDataSource } from "../../data-source";
import { WalletStaked } from "../staked/entity/user.wallet.staked.entity";
import { TokenPrice } from "../token/entity/token.price.entity";
import { UserWalletMap } from "../user/entity/user.wallet.map.entity";
import { TumEach } from "./entity/tum.each.entity";

export async function GetInfo(UserWalletMap: UserWalletMap) {
    const walletInfo = TumDataSource.manager.getRepository(WalletStaked)
    const tokenStaked = await walletInfo.find({
        relations: {
            userWalletMap: true,
            token: true
        },
        where: {
            userWalletMap: UserWalletMap
        }
    })

    const tokenPrice = await TumDataSource.manager.find(TokenPrice, {
        where: {
            token: tokenStaked[0].token
        }
    })

    const tokenTumEach: string = await (parseInt(tokenStaked[0].staked) * parseInt(tokenPrice[0].price)).toString();

    RegisterWalletTumEach(tokenPrice[0].id, tokenStaked[0].id, tokenTumEach)
}

export async function RegisterWalletTumEach(priceId: any, stakedId: any, tokenTumEach: string) {
    const walletTumEach = TumDataSource.manager.create(TumEach, {
        tokenPrice: priceId,
        walletStaked: stakedId,
        valueStaked: tokenTumEach
    })
    await TumDataSource.manager.save(walletTumEach);  
}
