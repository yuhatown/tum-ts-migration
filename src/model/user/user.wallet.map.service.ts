
import { UserWalletMap } from "./entity/user.wallet.map.entity"
import { DeleteUserWalletMap, GetUserWalletMap, RegisterUserWalletMap } from "./user.wallet.map.orm"


interface UserWalletMapGetTable {
    userId: UserWalletMap
}

interface UserWalletMapRegisterTable {
    userId: UserWalletMap,
    walletId: UserWalletMap
}

interface UserWalletMapDeleteTable {
    mapId: number
}

export class UserWalletMapGet implements UserWalletMapGetTable {
    userId: UserWalletMap
    constructor(userId: UserWalletMap) {
        this.userId = userId
    }

    get(userId: UserWalletMap) {
        GetUserWalletMap(userId)
    }
}

export class UserWalletMapRegister implements UserWalletMapRegisterTable {
    userId: UserWalletMap
    walletId: UserWalletMap
    constructor(userId: UserWalletMap, walletId: UserWalletMap) {
        this.userId = userId
        this.walletId = walletId
    }

    register(userId: UserWalletMap, walletId: UserWalletMap) {
        RegisterUserWalletMap(userId, walletId)
    }
}

export class UserWalletMapDelete implements UserWalletMapDeleteTable {
    mapId: number
    constructor(mapId: number) {
        this.mapId = mapId
    }

    delete(mapId: number) {
        DeleteUserWalletMap(mapId)
    }
}