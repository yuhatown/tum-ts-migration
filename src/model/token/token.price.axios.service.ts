import axios from "axios";
import { tokenInfoConfig } from "../../config";
import { TokenPriceRegister } from "../token/token.price.service";
import { Token } from "./entity/token.entity";

export const tokenPriceInfo = (tokenIdRelation: Token) => {
    axios(tokenInfoConfig)
    .then(function (response) {
    const token = response.data;
    for (let i = 0; i < token.length; i++) {
        if (token[i].id === "ethereum") {
          const tokenId = tokenIdRelation;
          const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price)
          tokenPrice.register(tokenId, token[i].current_price)
              
        } else if (token[i].id === "solana") {
            const tokenId = tokenIdRelation;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "matic-network") {
            const tokenId = tokenIdRelation;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "cosmos") {
            const tokenId = tokenIdRelation;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "near") {
            const tokenId = tokenIdRelation;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "the-graph") {
            const tokenId = tokenIdRelation;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "celo") {
            const tokenId = tokenIdRelation;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "mina-protocol") {
            const tokenId = tokenIdRelation;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "osmosis") {
            const tokenId = tokenIdRelation;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "persistence") {
            const tokenId = tokenIdRelation;
            const tokenPrice = new TokenPriceRegister(tokenId, token[i].current_price) 
            tokenPrice.register(tokenId, token[i].current_price)
    
        } else if (token[i].id === "certik") {
            const tokenId = tokenIdRelation;
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