import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { WalletStaked } from "../../staked/database/user.wallet.staked.orm-entity";
import { TokenPrice } from "../../token/database/token.price.orm-entity";

@Entity({ name: "tum_each" })
export class TumEach {
  @PrimaryGeneratedColumn({
    name: "id",
    type: "int",
  })
  id!: number;

  @Column({
    name: "value_staked",
    type: "decimal",
    precision: 36,
    scale: 18,
    nullable: false,
  })
  valueStaked!: string

  @ManyToOne(() => WalletStaked, (walletStaked) => walletStaked.tumEach)
  @JoinColumn({ name: "staked_id", referencedColumnName: "id" })
  walletStaked!: WalletStaked

  @ManyToOne(() => TokenPrice, (tokenPrice) => tokenPrice.tumEach)
  @JoinColumn({ name: "price_id", referencedColumnName: "id" })
  tokenPrice!: TokenPrice
}
