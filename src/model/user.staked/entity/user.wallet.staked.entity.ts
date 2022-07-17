import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"


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

    @Column({
        name: 'map_user_wallet_id',
        type: 'int',
        nullable: false
    })
    mapId!: number
}


