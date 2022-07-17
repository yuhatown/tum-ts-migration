import { TumDataSource  } from "../../data-source";
import { UserWallet } from "../entity/user.wallet.entity";
import { nearStaked } from "./chain/user.wallet.staked.near.service";
import { WalletStaked } from "../entity/user.wallet.staked.entity";

const userWalletRepository = TumDataSource.getRepository(UserWallet);
const userWalletStakedRepositroy = TumDataSource.getRepository(WalletStaked);

// relation을 할 경우에는 이것을 수정해야 한다. 
export async function GetWalletAddress(userId: number) {
    const wallet = await userWalletRepository.find({where: {id: userId}}) 
    console.log(wallet[0].address);
    nearStaked(wallet[0].address)
}

export async function RegisterUsetWalletStaked(staked: string, mapId: number) {
    const newUserWalletStaked = await userWalletStakedRepositroy.create({
        staked: staked,
        mapId: mapId
    })
    await userWalletStakedRepositroy.save(newUserWalletStaked)
    console.log("Saved a new user with name: " + newUserWalletStaked.staked)
}
