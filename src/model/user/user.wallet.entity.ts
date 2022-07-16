import { Entity, Column } from "typeorm"

@Entity({ name: 'wallet' })
export class UserWallet {

    @Column({
        name: 'id',
        type: 'int',
        nullable: false
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
        type: 'int',
        nullable: false,
        length: 50
    })
    address!: string
}
