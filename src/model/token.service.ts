import { DeleteToken, GetTokenList, RegisterToken, UpdateToken } from "./token.orm";

interface TokenRegisterTable {
    tokenName: string
}

interface TokenUpdateTable {
    tokenId: number,
    tokenName: string
}

interface TokenDeleteTable {
    tokenId: number
}

export class TokenListGet {
    get() {
        GetTokenList()
    }
}
export class TokenRegister implements TokenRegisterTable {
    tokenName: string
    constructor(tokenName: string){
        this.tokenName = tokenName
    }
    register(tokenName: string) {
        RegisterToken(tokenName)
    }
}

export class TokenUpdate implements TokenUpdateTable {
    tokenId: number
    tokenName: string
    constructor(tokenId: number, tokenName: string) {
        this.tokenId = tokenId
        this.tokenName = tokenName
    }

    update(tokenId: number, tokenName: string) {
        UpdateToken(tokenId, tokenName)
    }
}

export class TokenDelete implements TokenDeleteTable {
    tokenId: number
    constructor(tokenId: number) {
        this.tokenId = tokenId
    }

    delete(tokenId: number) {
        DeleteToken(tokenId)
    }
}