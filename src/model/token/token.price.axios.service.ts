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
          const tokenPrice = new TokenPriceRegister(tokenId, token[0].current_price, token[0].last_updated)
          tokenPrice.register(tokenId, token[0].current_price, token[0].last_updated)
              
        } else if (token[i].id === "solana") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[1].current_price, token[1].last_updated) 
            tokenPrice.register(tokenId, token[1].current_price, token[1].last_updated)
    
        } else if (token[i].id === "matic-network") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[2].current_price, token[2].last_updated) 
            tokenPrice.register(tokenId, token[2].current_price, token[2].last_updated)
    
        } else if (token[i].id === "cosmos") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[3].current_price, token[3].last_updated) 
            tokenPrice.register(tokenId, token[3].current_price, token[3].last_updated)
    
        } else if (token[i].id === "near") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[4].current_price, token[4].last_updated) 
            tokenPrice.register(tokenId, token[4].current_price, token[4].last_updated)
    
        } else if (token[i].id === "the-graph") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[5].current_price, token[5].last_updated) 
            tokenPrice.register(tokenId, token[5].current_price, token[5].last_updated)
    
        } else if (token[i].id === "celo") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[6].current_price, token[6].last_updated) 
            tokenPrice.register(tokenId, token[6].current_price, token[6].last_updated)
    
        } else if (token[i].id === "mina-protocol") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[7].current_price, token[7].last_updated) 
            tokenPrice.register(tokenId, token[7].current_price, token[7].last_updated)
    
        } else if (token[i].id === "osmosis") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[8].current_price, token[8].last_updated) 
            tokenPrice.register(tokenId, token[8].current_price, token[8].last_updated)
    
        } else if (token[i].id === "persistence") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[9].current_price, token[9].last_updated) 
            tokenPrice.register(tokenId, token[9].current_price, token[9].last_updated)
    
        } else if (token[i].id === "certik") {
            const tokenId = i + 1;
            const tokenPrice = new TokenPriceRegister(tokenId, token[10].current_price, token[10].last_updated) 
            tokenPrice.register(tokenId, token[10].current_price, token[10].last_updated)
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