import { Entity, Column } from "typeorm"

@Entity({ name: 'map_user_wallet' })
export class UserWalletMap {

    @Column({
        name: 'id',
        type: 'int',
        nullable: false
    })
    id!: number

    @Column({
        name: 'user_id',
        type: 'int',
        nullable: false
    })
    userId!: number

    @Column({
        name: 'wallet_id',
        type: 'int',
        nullable: false
    })
    walletId!: number
}
