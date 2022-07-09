import { DeleteUser, GetUser, RegisterUser, UpdateUser } from './user.orm'

interface UserGetTable {
    userId: number
}

interface UserRegisterTable {
    userName: string
}

interface UserUpdateTable {
    userId: number
    userName: string
}

interface UserDeleteTable {
    userId: number
    userActive: boolean
}

export class UserGet implements UserGetTable {
    userId: number
    constructor(userId: number) {
        this.userId = userId
    }

    get(userId: number) {      
        GetUser(userId)  
    }
}

export class UserRegister implements UserRegisterTable {
    userName: string
    constructor(userName: string) {
        this.userName = userName
    }

    register(userName: string) {
        RegisterUser(userName)
    }
}

export class UserUpdate implements UserUpdateTable {
    userId: number
    userName: string
    constructor(userId: number, userName: string) {
        this.userId = userId
        this.userName = userName
    }

    update(userId: number, userName: string): void {
        UpdateUser(userId, userName)
    }
}

export class UserDelete implements UserDeleteTable {
    userId: number
    userActive: boolean
    constructor(userId: number, userActive: boolean) {
        this.userId = userId
        this.userActive = userActive
    }

    delete(userId: number, userActive: boolean) {
        DeleteUser(userId, userActive)
    }
}


