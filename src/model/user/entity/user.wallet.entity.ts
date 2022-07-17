import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { Token } from "../../token/entity/token.entity"
import { UserWalletMap } from "./user.wallet.map.entity"

@Entity({ name: 'wallet' })
export class UserWallet {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id!: number

    @Column({
        name: 'address',
        type: 'varchar',
        nullable: false,
        length: 50
    })
    address!: string

    // @Column({
    //     name: 'token_id',
    //     type: 'int',
    //     nullable: false
    // })
    // tokenId!: number

    @ManyToOne(() => Token, (token) => token.userWallet)
    @JoinColumn({ name: "token_id", referencedColumnName: "id" })
    token!: Token

    @OneToMany(() => UserWalletMap, (userWalletMap) => userWalletMap.userWallet)
    userWalletMap!: UserWalletMap[]
}
