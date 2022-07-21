import { TumDataSource  } from "../../../data-source";
import { Token } from "./token.orm-entity";
import { TokenPrice } from "./token.price.orm-entity";

export async function GetTokenPriceList() {
    const tokenPriceList = await TumDataSource.manager.find(TokenPrice)
    console.log(tokenPriceList)
}

export async function RegisterTokenPrice(tokenId: Token, tokenPrice: string) {
    const newTokenPrice = TumDataSource.manager.create(TokenPrice, {
        token: tokenId,
        price: tokenPrice
    })
    await TumDataSource.manager.save(newTokenPrice)
    console.log("Saved a new token with price: " + newTokenPrice.price);
}
