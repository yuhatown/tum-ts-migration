import { TumDataSource  } from "../../../data-source";
import { TokenPrice } from "./token.price.orm-entity";

export async function GetTokenPriceList() {
    const tokenPriceList = await TumDataSource.manager.find(TokenPrice)
    console.log(tokenPriceList)
}

export async function RegisterTokenPrice(tokenId: number, tokenPrice: string) {
    const newTokenPrice = TumDataSource.manager.create(TokenPrice, {
        token: { id: tokenId },
        price: tokenPrice
    })
    await TumDataSource.manager.save(newTokenPrice)
    console.log("Saved a new token with price: " + newTokenPrice.price);
}
