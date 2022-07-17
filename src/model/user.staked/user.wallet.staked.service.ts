import { GetWalletAddress } from "./user.wallet.staked.orm"

interface WalletAddressGetTable {
  userId: number
}

export class WalletAddressGet implements WalletAddressGetTable {
  userId: number
  constructor(userId: number) {
      this.userId = userId
  }

  get(userId: number) {      
      GetWalletAddress(userId)  
  }
}