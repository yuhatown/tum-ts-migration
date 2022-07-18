import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import { Token } from "./token.entity"

@Entity({ name: 'token_price'})
export class TokenPrice {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id!: number

    @Column({
        name: 'price',
        type: 'decimal',
        precision: 36,
        scale: 18,
        nullable: false
      })
    price!: string

    @ManyToOne(() => Token, (token) => token.tokenPrice)
    @JoinColumn({ name: "token_id", referencedColumnName: "id" })
    token!: Token
}

