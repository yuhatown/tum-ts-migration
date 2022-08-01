import axios from "axios";
import { tokenInfoConfig } from "../../config";
import { RegisterToken } from "./database/token.repository";

export const axiosTokenInfoRegister = async () => {
  const response = await axios(tokenInfoConfig)
  const token = response.data
  for(let i = 0; i < token.length; i++) {
    RegisterToken(token[i].id)
  }
}