import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: 'map_user_wallet' })
export class MapUserWallet {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    user_id!: number

    @Column()
    wallet_id!: number

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    created_at!: Date
}
