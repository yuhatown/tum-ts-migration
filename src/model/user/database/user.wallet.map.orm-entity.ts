import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./user.orm-entity"
import { UserWallet } from "./user.wallet.orm-entity"

@Entity({ name: 'map_user_wallet' })
export class UserWalletMap {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id!: number

    @ManyToOne(() => User, (user) => user.userWalletMap)
    @JoinColumn({name: "user_id", referencedColumnName: "id"})
    user!: User

    @ManyToOne(() => UserWallet, (userWallet) => userWallet.userWalletMap)
    @JoinColumn({ name: "wallet_id", referencedColumnName: "id"})
    userWallet!: UserWallet
}
