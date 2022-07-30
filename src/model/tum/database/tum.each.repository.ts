import { TumDataSource } from "../../../data-source";
import { WalletStaked } from "../../staked/database/user.wallet.staked.orm-entity";
import { TokenPrice } from "../../token/database/token.price.orm-entity";
import { TumEach } from "./tum.each.orm-entity";

export async function GetTumEach(stakedId: number) {
    const tumEach = TumDataSource.manager.getRepository(TumEach)
    const tumEachInfo = await tumEach.find({
        order: {
            id: "DESC",
        },
        take: 1,
        relations: {
            walletStaked: true
        },
        where: {
            walletStaked: { id: stakedId }
        }
    })
    console.log(tumEachInfo);
}

export async function GetInfo(tokenId: number) {
    
    const walletInfo = TumDataSource.manager.getRepository(WalletStaked)
    const tokenStaked = await walletInfo.find({
        order: {
            id: "DESC",
        },
        take: 1,
        relations: {
            userWalletMap: true,
            token: true
        },
        where: {
            token: { id: tokenId }
        } 
    })

    const priceRepository = TumDataSource.manager.getRepository(TokenPrice)
    const tokenPrice = await priceRepository.find({
        order: {
            id: "DESC",
        },
        take: 1,
        relations: {
            token: true
        },
        where: {
            token: { id: tokenId }
        }
    })

    const tokenTumEach: string = await (parseInt(tokenStaked[0].staked) * parseInt(tokenPrice[0].price)).toString();
    RegisterWalletTumEach(tokenPrice[0].token.id, tokenStaked[0].userWalletMap.id, tokenTumEach)
}

export async function RegisterWalletTumEach(priceId: any, stakedId: any, tokenTumEach: string) {
    const walletTumEach = TumDataSource.manager.create(TumEach, {
        tokenPrice: priceId,
        walletStaked: stakedId,
        valueStaked: tokenTumEach
    })
    await TumDataSource.manager.save(walletTumEach);  
}
