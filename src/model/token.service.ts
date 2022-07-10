import { GetTokenList, RegisterToken } from "./token.orm";

interface TokenRegisterTable {
    tokenName: string
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