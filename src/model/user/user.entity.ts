import { Entity, Column } from "typeorm";
@Entity({ name: 'user'})
export class User {

    @Column({
        length: 20
    })
    name!: string

    @Column({ default: true })
    is_active!: boolean
}
