import { Token } from "./entity/token.entity";
import { GetTokenPriceList, RegisterTokenPrice } from "./token.price.orm";

interface TokenPriceRegisterTable {
    tokenId: Token,
    tokenPrice: string,
}

export class TokenPriceListGet {
    get() {
        GetTokenPriceList()
    }
}
export class TokenPriceRegister implements TokenPriceRegisterTable {
    tokenId: Token
    tokenPrice: string
    constructor(tokenId: Token, tokenPrice: string){
        this.tokenId = tokenId
        this.tokenPrice = tokenPrice
    }
    register(tokenId: Token, tokenPrice: string) {
        RegisterTokenPrice(tokenId, tokenPrice)
    }
}
