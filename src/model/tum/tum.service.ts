import { User } from "../user/database/user.orm-entity";
import { CollectWalletStaked, RegisterTum } from "./database/tum.repository";


interface walletStakedCollect {
    userId: User
}

interface tumRegisterTable {
    valueUsd: string
    valueKrw: string
    user: User
}

export class WalletStaked implements walletStakedCollect{
    userId: User
    constructor(userId: User) {
        this.userId = userId
    }
    get(userId: User) {
        CollectWalletStaked(userId)
    }
}

export class UserTum implements tumRegisterTable {
    valueUsd: string
    valueKrw: string
    user: User
    constructor(valueUsd: string, valueKrw: string, user:User) {
        this.valueUsd = valueUsd
        this.valueKrw = valueKrw
        this.user = user
    }
    register(valueUsd: string, valueKrw: string, user:User) {
        RegisterTum(valueUsd, valueKrw, user)
    }
}