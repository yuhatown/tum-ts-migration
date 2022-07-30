import { TumDataSource  } from "../../../data-source";
import { Token } from "./token.orm-entity";

export async function GetTokenList() {
    const tokenList = await TumDataSource.manager.find(Token)
    console.log(tokenList)
}

export async function RegisterToken(tokenName: string) {
    const newToken = TumDataSource.manager.create(Token, {
        name: tokenName
    })
    await TumDataSource.manager.save(newToken)
    console.log("Saved a new token with name: " + newToken.name);
}

export async function UpdateToken(tokenId: number, tokenName: string) {
    await TumDataSource.manager.update(Token, tokenId, {name: tokenName})    
}

export async function DeleteToken(tokenId: number) {
    await TumDataSource.manager.delete(Token, { id: tokenId })
}