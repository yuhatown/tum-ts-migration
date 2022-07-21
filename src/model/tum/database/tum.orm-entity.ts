import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/database/user.orm-entity";


@Entity({ name: "tum" })
export class Tum {
    @PrimaryGeneratedColumn({
        name: "id",
        type: "int"
    })
    id!: number;

    @Column({
        name: "value_usd",
        type: "decimal",
        precision: 36,
        scale: 18,
        nullable: false,
    })
    valueUsd!: string

    @Column({
        name: "value_krw",
        type: "decimal",
        precision: 36,
        scale: 18,
        nullable: false,
    })
    valueKrw!: string

    @ManyToOne(() => User, (user) => user.tum)
    @JoinColumn({ name: "user_id", referencedColumnName: "id" })
    user!: User
}