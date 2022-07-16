import { Entity, Column } from "typeorm"

@Entity({ name: 'wallet' })
export class UserWallet {

    @Column()
    token_id!: number

    @Column({
        length: 50
    })
    address!: string
}
