import { TumDataSource } from "../../../data-source"
import { User } from "../../user/database/user.orm-entity"
import { TumEach } from "./tum.each.orm-entity"
import { Tum } from "./tum.orm-entity"

export async function CollectWalletStaked(userId: User) {
    const tumEachRepository = TumDataSource.manager.getRepository(TumEach)
    const walletStakedInfo = await tumEachRepository.find({
        order: {
            id: "DESC",
        },
        take: 11,
        relations: {
            tokenPrice: true
        }
    })

    let tumTotal: any = 0
    for (let i = 0; i < walletStakedInfo.length; i++) {
        const priceId = walletStakedInfo[i].tokenPrice.id 
        const valueStaked = parseInt(walletStakedInfo[i].valueStaked)
        const stakedId = walletStakedInfo[i].id === Math.max.apply(null, walletStakedInfo.map(a => a.id))

        if (priceId === 1) {
            if (stakedId) {
                tumTotal += valueStaked
            }

        } else if (priceId === 2) {
            if (stakedId) {
                tumTotal += valueStaked
            }

        } else if (priceId === 3) {
            if (stakedId) {
                tumTotal += valueStaked
            }

        } else if (priceId === 4 ) {
            if (stakedId) {
                tumTotal += valueStaked
            }

        } else if (priceId === 5) {
            if (stakedId) {
                tumTotal += valueStaked
            }

        } else if (priceId === 6) {
            if (stakedId) {
                tumTotal += valueStaked
            }

        } else if (priceId === 7) {
            if (stakedId) {
                tumTotal += valueStaked
            }
            
        } else if (priceId === 8) {
            if (stakedId) {
                tumTotal += valueStaked
            }

        } else if (priceId === 9) {
            if (stakedId) {
                tumTotal += valueStaked
            }

        } else if (priceId === 10) {
            if (stakedId) {
                tumTotal += valueStaked
            }
            break

        } else {
            throw new Error("Not Found");
        }
    } 
    console.log(tumTotal);
    
    const valueKrw = (tumTotal * 1300).toString()
    RegisterTum(tumTotal, valueKrw, userId)
}

export async function RegisterTum(valueUsd: string, valueKrw: string, user: User) {
    const userTum = TumDataSource.manager.create(Tum, {
        valueUsd: valueUsd,
        valueKrw: valueKrw,
        user: user
    })
    await TumDataSource.manager.save(userTum);
}