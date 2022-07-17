import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'wallet' })
export class UserWallet {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id!: number

    @Column({
        name: 'token_id',
        type: 'int',
        nullable: false
    })
    tokenId!: number

    @Column({
        name: 'address',
        type: 'varchar',
        nullable: false,
        length: 50
    })
    address!: string
}
