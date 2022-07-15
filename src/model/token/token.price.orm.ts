import { TumDataSource  } from "../../data-source";
import { TokenPrice } from "./token.price.entity";

const userRepository = TumDataSource.getRepository(TokenPrice);

export async function GetTokenPriceList() {
    const tokenPriceList = await userRepository.find()
    console.log(tokenPriceList)
}

export async function RegisterTokenPrice(tokenId: number, tokenPrice: number, lastUpdated: string) {
    const newTokenPrice = userRepository.create({
        token_id: tokenId,
        price: tokenPrice,
        last_updated: lastUpdated
    })
    await userRepository.save(newTokenPrice)
    console.log("Saved a new token with id: " + newTokenPrice.id);
}
