import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./user.entity"
import { UserWallet } from "./user.wallet.entity"

@Entity({ name: 'map_user_wallet' })
export class UserWalletMap {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id!: number

    // @Column({
    //     name: 'user_id',
    //     type: 'int',
    //     nullable: false
    // })
    // userId!: number

    // @Column({
    //     name: 'wallet_id',
    //     type: 'int',
    //     nullable: false
    // })
    // walletId!: number

    @ManyToOne(() => User, (user) => user.userWalletMap)
    @JoinColumn({name: "user_id", referencedColumnName: "id"})
    user!: User

    @ManyToOne(() => UserWallet, (userWallet) => userWallet.userWalletMap)
    @JoinColumn({ name: "wallet_id", referencedColumnName: "id"})
    userWallet!: UserWallet
}
