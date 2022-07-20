import { WalletStaked } from "../staked/entity/user.wallet.staked.entity";
import { TokenPrice } from "../token/entity/token.price.entity";
import { GetInfo, RegisterWalletTumEach } from "./tum.each.orm";

interface InfoGetTable {
    tokenId: number
}

interface WalletTumEachReigsterTable {
    priceId: TokenPrice
    stakedId: WalletStaked
    valueStaked: string
}

export class InfoGet implements InfoGetTable {
    tokenId: number
    constructor(tokenId: number) {
        this.tokenId = tokenId
    }
    get(tokenId: number) {
        GetInfo(tokenId)
    }
}

export class WalletTumEachReigster implements WalletTumEachReigsterTable {
    priceId: TokenPrice
    stakedId: WalletStaked
    valueStaked: string
    constructor(priceId: TokenPrice, stakedId: WalletStaked, valueStaked: string) {
        this.priceId = priceId
        this.stakedId = stakedId
        this.valueStaked = valueStaked
    }
    register(priceId: TokenPrice, stakedId: WalletStaked, valueStaked: string) {
        RegisterWalletTumEach(priceId, stakedId, valueStaked)
    }
}