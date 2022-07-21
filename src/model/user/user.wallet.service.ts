import { Token } from '../token/database/token.orm-entity'
import { DeleteUserWallet, RegisterUserWallet, UpdateUserWallet } from './database/user.wallet.repository'

interface UserWalletRegisterTable {
    relationToken: string
    userWallet: string
}

interface UserWalletUpdateTable {
    walletId: number,
    tokenId: Token,
    userWallet: string
}

interface UserWalletDeleteTable {
    walletId: number
}

export class UserWalletRegister implements UserWalletRegisterTable {
    userWallet: string
    relationToken: string
    constructor(relationToken: string, userWallet: string) {
        this.relationToken = relationToken
        this.userWallet = userWallet
    }

    register(relationToken: string, userWallet: string) {
        RegisterUserWallet(relationToken, userWallet)
    }
}

export class UserWalletUpdate implements UserWalletUpdateTable {
    walletId: number
    tokenId: Token
    userWallet: string
    constructor(walletId: number, tokenId: Token, userWallet: string) {
        this.walletId = walletId
        this.tokenId = tokenId
        this.userWallet = userWallet
    }

    update(walletId: number, tokenId: Token, userWallet: string) {
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


