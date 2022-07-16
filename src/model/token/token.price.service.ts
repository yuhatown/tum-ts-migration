import { GetTokenPriceList, RegisterTokenPrice } from "./token.price.orm";

interface TokenPriceRegisterTable {
    tokenId: number,
    tokenPrice: number,
}

export class TokenPriceListGet {
    get() {
        GetTokenPriceList()
    }
}
export class TokenPriceRegister implements TokenPriceRegisterTable {
    tokenId: number
    tokenPrice: number
    constructor(tokenId: number, tokenPrice: number){
        this.tokenId = tokenId
        this.tokenPrice = tokenPrice
    }
    register(tokenId: number, tokenPrice: number) {
        RegisterTokenPrice(tokenId, tokenPrice)
    }
}
