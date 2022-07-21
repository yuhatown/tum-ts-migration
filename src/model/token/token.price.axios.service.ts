import axios from "axios";
import { tokenInfoConfig } from "../../config";
import { TokenPriceRegister } from "../token/token.price.service";

export const tokenPriceInfoRegister = async () => {
    const response = await axios(tokenInfoConfig)
    const token = response.data

    for (let i = 0; i < token.length; i++) {
        const tokenId: any = i + 1;
        const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price)
        tokenPrice.register(tokenId, token[i].current_price)
      }      
}