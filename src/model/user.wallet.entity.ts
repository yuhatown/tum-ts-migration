import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class UserWallet {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    user_id!: number

    @Column()
    token_id!: number

    @Column({
        length: 50
    })
    address!: string

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    created_at!: Date

}