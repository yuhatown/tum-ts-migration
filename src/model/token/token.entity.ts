import { Entity, Column } from "typeorm";

@Entity()
export class Token {

    @Column({
        length: 20
    })
    name!: string
}