import { TumDataSource } from "../../data-source";
import { WalletStaked } from "../staked/entity/user.wallet.staked.entity";
import { TokenPrice } from "../token/entity/token.price.entity";
import { TumEach } from "./entity/tum.each.entity";

export async function GetInfo(stakedTokenId: WalletStaked, priceTokenId: TokenPrice) {
    
    const walletInfo = TumDataSource.manager.getRepository(WalletStaked)
    const tokenStaked = await walletInfo.find({
        relations: {
            userWalletMap: true,
            token: true
        },
        where: {
            token: stakedTokenId
        } 
    })
    console.log(tokenStaked);
    // const stakedId = Math.max.apply(null, tokenStaked.map(a => a.id))
    // console.log(stakedId);
    

    const priceRepository = TumDataSource.manager.getRepository(TokenPrice)
    const tokenPrice = await priceRepository.find({
        relations: {
            token: true
        },
        where: {
            token: priceTokenId
        }
    })
    console.log(tokenPrice);

    // for(let i = 0; i < tokenPrice.length; i++){
    //     if(tokenPrice[i].id === Math.max.apply(null, tokenPrice.map(a => a.id))) {

    //     }
    // }
    // console.log(Math.max.apply(null, tokenPrice.map(a => a.id)));


    // tumEach 계산하기
    // const tokenTumEach: string = await (parseInt(tokenStaked[0].staked) * parseInt(tokenPrice[0].price)).toString();

    // RegisterWalletTumEach(tokenPrice[0].id, tokenStaked[0].id, tokenTumEach)
}

export async function RegisterWalletTumEach(priceId: any, stakedId: any, tokenTumEach: string) {
    const walletTumEach = TumDataSource.manager.create(TumEach, {
        tokenPrice: priceId,
        walletStaked: stakedId,
        valueStaked: tokenTumEach
    })
    await TumDataSource.manager.save(walletTumEach);  
}
