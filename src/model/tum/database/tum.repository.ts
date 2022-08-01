import { TumDataSource } from "../../../data-source"
import { User } from "../../user/database/user.orm-entity"
import { TumEach } from "./tum.each.orm-entity"
import { Tum } from "./tum.orm-entity"

export async function GetTum(userId: number) {
    const userTum = await TumDataSource.manager.find(Tum, {
        order: {
            id: "DESC",
        },
        take: 1,
        where: {
            user: {id: userId}
        }
    })
    console.log(userTum);
}

export async function CollectWalletStaked(userId: User) {
    const tumEachRepository = TumDataSource.manager.getRepository(TumEach)
    const walletStakedInfo = await tumEachRepository.find({
        order: {
            id: "DESC",
        },
        take: 1, // protocol number
        relations: {
            tokenPrice: true
        }
    })

    let tumTotal = 0
    for (let i = 0; i < walletStakedInfo.length; i++) {
        tumTotal += parseInt(walletStakedInfo[i].valueStaked)
    }

    const valueUsd = tumTotal.toString()
    const valueKrw = (tumTotal * 1300).toString()
    RegisterTum(valueUsd, valueKrw, userId)
}

export async function RegisterTum(valueUsd: string, valueKrw: string, user: User) {
    const userTum = TumDataSource.manager.create(Tum, {
        valueUsd: valueUsd,
        valueKrw: valueKrw,
        user: user
    })
    await TumDataSource.manager.save(userTum);
}