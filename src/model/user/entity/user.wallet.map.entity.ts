import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'map_user_wallet' })
export class UserWalletMap {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
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
