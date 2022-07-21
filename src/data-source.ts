import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv";
import { Token } from "./model/token/database/token.orm-entity";
import { TokenPrice } from "./model/token/database/token.price.orm-entity";
import { User } from "./model/user/database/user.orm-entity";
import { UserWallet } from "./model/user/database/user.wallet.orm-entity";
import { UserWalletMap } from "./model/user/database/user.wallet.map.orm-entity";
import { WalletStaked } from "./model/staked/database/user.wallet.staked.orm-entity";
import { TumEach } from "./model/tum/database/tum.each.orm-entity";
import { Tum } from "./model/tum/database/tum.orm-entity";

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
    entities: [Token, TokenPrice, User, UserWallet, UserWalletMap, WalletStaked, TumEach, Tum],
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
