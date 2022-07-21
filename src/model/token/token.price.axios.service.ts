import axios from "axios";
import { tokenInfoConfig } from "../../config";
import { TokenPriceRegister } from "../token/token.price.service";

export const tokenPriceInfo = async () => {
    const response = await axios(tokenInfoConfig)
    const token = response.data

    for (let i = 0; i < token.length; i++) {
        if (token[i].id === "ethereum") {
          const tokenId: any = i+1;
          const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price)
          tokenPrice.register(tokenId, token[i].current_price)
              
        } else if (token[i].id === "solana") {
            const tokenId: any = i+1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "matic-network") {
            const tokenId: any = i+1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "cosmos") {
            const tokenId: any = i+1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "near") {
            const tokenId: any = i+1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "the-graph") {
            const tokenId: any = i+1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "celo") {
            const tokenId: any = i+1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "mina-protocol") {
            const tokenId: any = i+1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "osmosis") {
            const tokenId: any = i+1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "persistence") {
            const tokenId: any = i+1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "certik") {
            const tokenId: any = i+1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
            break
        } else {
          throw new Error("Not Found");
        }
      }      
}