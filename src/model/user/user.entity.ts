import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity({ name: 'user'})
export class User {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        length: 20
    })
    name!: string

    @Column({ default: true })
    is_active!: boolean

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    created_at!: Date
}
