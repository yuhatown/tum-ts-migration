import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: 'token_price'})
export class TokenPrice {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    token_id!: number

    @Column()
    price!: number

    @Column({
        length: 50
    })
    last_updated!: string
}

