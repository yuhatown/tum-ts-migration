import { WalletStaked } from "../staked/entity/user.wallet.staked.entity";
import { TokenPrice } from "../token/entity/token.price.entity";
import { UserWalletMap } from "../user/entity/user.wallet.map.entity";
import { GetInfo, RegisterWalletTumEach } from "./tum.each.orm";

interface InfoGetTable {
    userWalletMap: UserWalletMap
}

interface WalletTumEachReigsterTable {
    priceId: TokenPrice
    stakedId: WalletStaked
    valueStaked: string
}

export class InfoGet implements InfoGetTable {
    userWalletMap: UserWalletMap;
    constructor(userWallerMap: UserWalletMap) {
        this.userWalletMap = userWallerMap
    }
    get(userWallerMap: UserWalletMap) {
        GetInfo(userWallerMap)
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