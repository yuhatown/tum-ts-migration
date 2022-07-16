import { Entity, Column } from "typeorm";
@Entity({ name: 'user'})
export class User {

    @Column({
        name: 'id',
        type: 'int',
        nullable: false
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
}
