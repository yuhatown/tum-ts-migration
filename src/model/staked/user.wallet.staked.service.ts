import { GetWalletAddress } from "./database/user.wallet.staked.repository"

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