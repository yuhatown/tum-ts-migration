import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { UserWalletMap } from "./user.wallet.map.entity";
@Entity({ name: 'user'})
export class User {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id!: number

    @Column({
        name: 'name',
        type: 'varchar',
        nullable: false,
        length: 20
      })
    name!: string

    @Column({
        name: 'is_active', 
        type: 'tinyint',
        default: '1'
    })
    isActive!: boolean

    @OneToMany(() => UserWalletMap, (userWalletMap) => userWalletMap.user)
    userWalletMap!: UserWalletMap[]
}
