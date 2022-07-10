import { TumDataSource  } from "../data-source";
import { Token } from "./token.entity";

const userRepository = TumDataSource.getRepository(Token);

export async function GetTokenList() {
    const tokenList = await userRepository.find()
    console.log(tokenList)
}

export async function RegisterToken(tokenName: string) {
    const newToken = userRepository.create({
        name: tokenName
    })
    await userRepository.save(newToken)
    console.log("Saved a new user with id: " + newToken.id);
    
}