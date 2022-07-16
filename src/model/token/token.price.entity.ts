import { Entity, Column } from "typeorm"

@Entity({ name: 'token_price'})
export class TokenPrice {

    @Column()
    token_id!: number

    @Column()
    price!: number
}

