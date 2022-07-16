import { Entity, Column } from "typeorm"

@Entity({ name: 'token_price'})
export class TokenPrice {

    @Column({
        name: 'token_id',
        type: 'int',
        nullable: false
    })
    tokenId!: number

    @Column({
        name: 'price',
        type: 'decimal',
        precision: 36,
        scale: 18,
        nullable: false
      })
    price!: string
}

