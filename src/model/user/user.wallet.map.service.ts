import { DeleteUserWalletMap, GetUserWalletMap, RegisterUserWalletMap } from "./user.wallet.map.orm"


interface UserWalletMapGetTable {
    userId: number
}

interface UserWalletMapRegisterTable {
    userId: number,
    walletId: number
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
    userId: number
    walletId: number
    constructor(userId: number, walletId: number) {
        this.userId = userId
        this.walletId = walletId
    }

    register(userId: number, walletId: number) {
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