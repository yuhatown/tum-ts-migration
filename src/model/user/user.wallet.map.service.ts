import { User } from "./entity/user.entity"
import { UserWallet } from "./entity/user.wallet.entity"
import { DeleteUserWalletMap, GetUserWalletMap, RegisterUserWalletMap } from "./user.wallet.map.orm"


interface UserWalletMapGetTable {
    userId: number
}

interface UserWalletMapRegisterTable {
    userId: User,
    walletId: UserWallet
}

interface UserWalletMapDeleteTable {
    mapId: number
}

export class UserWalletMapGet implements UserWalletMapGetTable {
    userId: number
    constructor(userId: number) {
        this.userId = userId
    }

    get(userId: number) {
        GetUserWalletMap(userId)
    }
}

export class UserWalletMapRegister implements UserWalletMapRegisterTable {
    userId: User
    walletId: UserWallet
    constructor(userId: User, walletId: UserWallet) {
        this.userId = userId
        this.walletId = walletId
    }

    register(userId: User, walletId: UserWallet) {
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