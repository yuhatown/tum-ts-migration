import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"
import { UserWalletMap } from "../../user/entity/user.wallet.map.entity"


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

    // @Column({
    //     name: 'map_user_wallet_id',
    //     type: 'int',
    //     nullable: false
    // })
    // mapId!: number

    @OneToOne(() => UserWalletMap)
    @JoinColumn({name: "map_user_wallet_id", referencedColumnName: "id"})
    userWalletMap!: UserWalletMap
}


