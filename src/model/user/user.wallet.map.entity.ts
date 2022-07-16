import { Entity, Column } from "typeorm"

@Entity({ name: 'map_user_wallet' })
export class UserWalletMap {

    @Column()
    user_id!: number

    @Column()
    wallet_id!: number
}
