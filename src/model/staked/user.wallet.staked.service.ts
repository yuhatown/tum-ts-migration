import { GetWalletAddress } from "./user.wallet.staked.orm"

interface WalletAddressGetTable {
  userId: number
  walletId: number
}

export class WalletAddressGet implements WalletAddressGetTable {
  userId: number
  walletId: number
  constructor(userId: number, walletId: number) {
      this.userId = userId
      this.walletId = walletId
  }

  get(userId: number, walletId: number) {      
      GetWalletAddress(userId, walletId)  
  }
}