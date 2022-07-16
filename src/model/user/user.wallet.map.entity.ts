import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: 'map_user_wallet' })
export class UserWalletMap {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    user_id!: number

    @Column()
    wallet_id!: number
}
