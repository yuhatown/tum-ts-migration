import axios from "axios";
import { tokenInfoConfig } from "../../config";
import { TokenRegister } from "../token/token.service";

export const axiosTokenInfo = async () => {
  const response = await axios(tokenInfoConfig)
  const token = response.data
  for(let i = 0; i < token.length; i++) {
    const tokenName = new TokenRegister(token[i].id);
    tokenName.register(token[i].id)
  }
}