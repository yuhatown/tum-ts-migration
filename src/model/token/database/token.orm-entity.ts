import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { WalletStaked } from "../../staked/database/user.wallet.staked.orm-entity";
import { UserWallet } from "../../user/database/user.wallet.orm-entity";
import { TokenPrice } from "./token.price.orm-entity";

@Entity()
export class Token {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id!: number

    @Column({
        name: 'name',
        type: 'varchar',
        nullable: false,
        length: 20
    })
    name!: string

    @OneToMany(() => UserWallet, (userWallet) => userWallet.token)
    userWallet!: UserWallet[]

    @OneToMany(() => TokenPrice, (tokenPrice) => tokenPrice.token)
    tokenPrice!: TokenPrice[]

    @OneToMany(() => WalletStaked, (walletStaked) => walletStaked.token)
    walletStaked!: WalletStaked
}