import { GetTokenPriceList, RegisterTokenPrice } from "./token.price.orm";

interface TokenPriceRegisterTable {
    tokenId: number,
    tokenPrice: number,
    lastUpdated: string
}

export class TokenPriceListGet {
    get() {
        GetTokenPriceList()
    }
}
export class TokenPriceRegister implements TokenPriceRegisterTable {
    tokenId: number
    tokenPrice: number
    lastUpdated: string
    constructor(tokenId: number, tokenPrice: number, lastUpdated: string){
        this.tokenId = tokenId
        this.tokenPrice = tokenPrice
        this.lastUpdated = lastUpdated
    }
    register(tokenId: number, tokenPrice: number, lastUpdated: string) {
        RegisterTokenPrice(tokenId, tokenPrice, lastUpdated)
    }
}
