import { TumDataSource  } from "../../data-source";
import { Token } from "./entity/token.entity";
import { TokenPrice } from "./entity/token.price.entity";

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
