import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { WalletStaked } from "../../staked/entity/user.wallet.staked.entity";
import { UserWallet } from "../../user/entity/user.wallet.entity";
import { TokenPrice } from "./token.price.entity";

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