import axios from "axios";
import { tokenInfoConfig } from "../../config";

const tokenPriceInfo = () => {

  axios(tokenInfoConfig)
    .then(function (response) {

      const token = response.data;
      for (let i = 0; i < token.length; i++) {

        if (token[i].id === "ethereum") {
          const tokenId = i + 1;
          console.log(tokenId, token[0].current_price, token[0].last_updated);

        } else if (token[i].id === "solana") {
          const tokenId = i + 1;
          console.log(tokenId, token[1].current_price, token[1].last_updated);

        } else if (token[i].id === "matic-network") {
          const tokenId = i + 1;
          console.log(tokenId, token[2].current_price, token[2].last_updated);
            break;
        } else {
          throw new Error("Not Found");
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

tokenPriceInfo();
