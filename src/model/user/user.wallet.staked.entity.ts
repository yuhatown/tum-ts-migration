import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class WalletStaked {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    wallet_id!: number

    @Column()
    token_id!: number

    @Column()
    staked!: number
}
