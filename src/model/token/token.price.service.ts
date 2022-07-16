import { GetTokenPriceList, RegisterTokenPrice } from "./token.price.orm";

interface TokenPriceRegisterTable {
    tokenId: number,
    tokenPrice: string,
}

export class TokenPriceListGet {
    get() {
        GetTokenPriceList()
    }
}
export class TokenPriceRegister implements TokenPriceRegisterTable {
    tokenId: number
    tokenPrice: string
    constructor(tokenId: number, tokenPrice: string){
        this.tokenId = tokenId
        this.tokenPrice = tokenPrice
    }
    register(tokenId: number, tokenPrice: string) {
        RegisterTokenPrice(tokenId, tokenPrice)
    }
}
