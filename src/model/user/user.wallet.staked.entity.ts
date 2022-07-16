import { Entity, Column } from "typeorm"

@Entity()
export class WalletStaked {

    @Column({
        name: 'wallet_id',
        type: 'int',
        nullable: false
    })
    walletId!: number

    @Column({
        name: 'token_id',
        type: 'int',
        nullable: false
    })
    tokenId!: number

    @Column({
        name: 'staked',
        type: 'decimal',
        precision: 36,
        scale: 18,
        nullable: false
      })
    staked!: string

    @Column({
        name: 'value_staked',
        type: 'decimal',
        precision: 36,
        scale: 18,
        nullable: false
      })
    valueStaked!: string
}
