import axios from "axios";
import { tokenInfoConfig } from "../../config";
import { TokenPriceRegister } from "../token/token.price.service";

export const tokenPriceInfo = () => {
    axios(tokenInfoConfig)
    .then(function (response) {
    const token = response.data;
    for (let i = 0; i < token.length; i++) {
        if (token[i].id === "ethereum") {
          const tokenId = i + 1;
          const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price)
          tokenPrice.register(tokenId, token[i].current_price)
              
        } else if (token[i].id === "solana") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "matic-network") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "cosmos") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "near") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "the-graph") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "celo") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "mina-protocol") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "osmosis") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "persistence") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "certik") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
            break
        } else {
          throw new Error("Not Found");
        }
      }    
    })
    .catch(function (error) {
      console.log(error);
    });
}