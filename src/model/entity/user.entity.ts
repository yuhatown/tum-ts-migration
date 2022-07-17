import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
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
}
