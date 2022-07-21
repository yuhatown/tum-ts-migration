import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm"
import { Token } from "../../token/database/token.orm-entity"
import { TumEach } from "../../tum/database/tum.each.orm-entity"
import { UserWalletMap } from "../../user/database/user.wallet.map.orm-entity"


@Entity()
export class WalletStaked {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id!: number

    @Column({
        name: 'staked',
        type: 'decimal',
        precision: 36,
        scale: 18,
        nullable: false
      })
    staked!: string

    @OneToOne(() => UserWalletMap)
    @JoinColumn({name: "map_user_wallet_id", referencedColumnName: "id"})
    userWalletMap!: UserWalletMap

    @ManyToOne(() => Token, (token) => token.walletStaked)
    @JoinColumn({ name: "token_id", referencedColumnName: "id"})
    token!: Token

    @OneToMany(() => TumEach, (tumEach) => tumEach.walletStaked)
    tumEach!: TumEach[]
}


