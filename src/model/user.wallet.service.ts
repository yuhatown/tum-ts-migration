import { DeleteUserWallet, GetUserWallet, RegisterUserWallet, UpdateUserWallet } from './user.wallet.orm'

interface UserWalletGetTable {
    userId: number
}

interface UserWalletRegisterTable {
    tokenId: number,
    userWallet: string
}

interface UserWalletUpdateTable {
    walletId: number,
    tokenId: number,
    userWallet: string
}

interface UserWalletDeleteTable {
    walletId: number
}

export class UserWalletGet implements UserWalletGetTable {
    userId: number
    constructor(userId: number) {
        this.userId = userId
    }

    get(userId: number) {      
        GetUserWallet(userId)  
    }
}

export class UserWalletRegister implements UserWalletRegisterTable {
    tokenId: number
    userWallet: string
    constructor(tokenId: number, userWallet: string) {
        this.tokenId = tokenId
        this.userWallet = userWallet
    }

    register(tokenId: number, userWallet: string) {
        RegisterUserWallet(tokenId, userWallet)
    }
}

export class UserWalletUpdate implements UserWalletUpdateTable {
    walletId: number
    tokenId: number
    userWallet: string
    constructor(walletId: number, tokenId: number, userWallet: string) {
        this.walletId = walletId
        this.tokenId = tokenId
        this.userWallet = userWallet
    }

    update(walletId: number, tokenId: number, userWallet: string) {
        UpdateUserWallet(walletId, tokenId, userWallet)
    }
}

export class UserWalletDelete implements UserWalletDeleteTable {
    walletId: number
    constructor(walletId: number) {
        this.walletId = walletId
    }

    delete(walletId: number) {
        DeleteUserWallet(walletId)
    }
}


