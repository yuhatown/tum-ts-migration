import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./model/user.entity"
import { UserWallet } from "./model/user.wallet.entity"
import * as dotenv from "dotenv";
dotenv.config();

export const TumDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User, UserWallet],
    // migrations: [],
    // subscribers: [],
})

TumDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })