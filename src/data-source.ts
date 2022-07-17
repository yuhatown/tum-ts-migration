import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv";
import { Token } from "./model/entity/token.entity";
import { TokenPrice } from "./model/entity/token.price.entity";
import { User } from "./model/entity/user.entity";
import { UserWallet } from "./model/entity/user.wallet.entity";
import { UserWalletMap } from "./model/entity/user.wallet.map.entity";
import { WalletStaked } from "./model/entity/user.wallet.staked.entity";

dotenv.config();

export const TumDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: false,
    entities: [Token, TokenPrice, User, UserWallet, UserWalletMap, WalletStaked],
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
