import { TumDataSource  } from "../../data-source";
import { Token } from "./entity/token.entity";

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
    console.log("Saved a new token with name: " + newToken.name);
}

export async function UpdateToken(tokenId: number, tokenName: string) {
    await userRepository.update(tokenId, {name: tokenName})    
}

export async function DeleteToken(tokenId: number) {
    await userRepository.delete({ id: tokenId })
}