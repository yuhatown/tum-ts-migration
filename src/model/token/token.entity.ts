import { Entity, Column } from "typeorm";

@Entity()
export class Token {
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
}