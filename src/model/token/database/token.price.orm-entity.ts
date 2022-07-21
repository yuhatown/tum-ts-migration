import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { TumEach } from "../../tum/database/tum.each.orm-entity"
import { Token } from "./token.orm-entity"

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

    @OneToMany(() => TumEach, (tumEach) => tumEach.tokenPrice)
    tumEach!: TumEach[]
}

