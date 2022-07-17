import axios from "axios";
import { tokenInfoConfig } from "../../config";
import { TokenRegister } from "../token/token.service";


export const axiosTokenInfo = () => {
    axios(tokenInfoConfig)
    .then(function (response) {
        const token = response.data;
        let i = 0;
        do {
          const tokenName = new TokenRegister(token[i].id);
          tokenName.register(token[i].id)
          i++;
        } while (i <= 10);
    })
    .catch(function (error) {
      console.log(error);
    });
}