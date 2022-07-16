import { Entity, Column } from "typeorm"

@Entity()
export class WalletStaked {

    @Column()
    wallet_id!: number

    @Column()
    token_id!: number

    @Column()
    staked!: number
}
