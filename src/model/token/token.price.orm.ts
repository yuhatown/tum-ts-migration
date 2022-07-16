import { TumDataSource  } from "../../data-source";
import { TokenPrice } from "./token.price.entity";

const userRepository = TumDataSource.getRepository(TokenPrice);

export async function GetTokenPriceList() {
    const tokenPriceList = await userRepository.find()
    console.log(tokenPriceList)
}

export async function RegisterTokenPrice(tokenId: number, tokenPrice: string) {
    const newTokenPrice = userRepository.create({
        tokenId: tokenId,
        price: tokenPrice
    })
    await userRepository.save(newTokenPrice)
    console.log("Saved a new token with price: " + newTokenPrice.price);
}
