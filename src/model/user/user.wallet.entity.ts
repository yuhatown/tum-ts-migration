import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: 'wallet' })
export class UserWallet {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    token_id!: number

    @Column({
        length: 50
    })
    address!: string
}
