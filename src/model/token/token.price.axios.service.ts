import axios from "axios";
import { tokenInfoConfig } from "../../config";
import { RegisterTokenPrice } from "./database/token.price.repository";

export const tokenPriceInfoRegister = async () => {
    const response = await axios(tokenInfoConfig)
    const token = response.data

    for (let i = 0; i < token.length; i++) {
        const tokenId = i + 1;
        RegisterTokenPrice(tokenId, token[i].current_price)
      }      
}