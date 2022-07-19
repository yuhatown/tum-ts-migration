import * as nearAPI from "near-api-js";
import { UserWalletMap } from "../../user/entity/user.wallet.map.entity";
import { RegisterUsetWalletStaked } from "../user.wallet.staked.orm";
const { connect } = nearAPI;

interface Config {
    networkId: string
    nodeUrl: string
    walletUrl?: string
    helperUrl?: string
    explorerUrl?: string
    headers: {
        [key: string]: string | number;
    };
}

interface NearNodeInfo {
    amount: string,
    block_hash: string,
    block_height: number,
    locked: string,
}

const config: Config = {
    networkId: "mainnet", 
    nodeUrl: "https://rpc.mainnet.near.org",
    walletUrl: "https://wallet.mainnet.near.org",
    helperUrl: "https://helper.mainnet.near.org",
    explorerUrl: "https://explorer.mainnet.near.org",
    headers: {"allthatnode": "UcgyA9G4MXBAkgw39NkGoPI06xtxzfM5"}
}

export const nearStaked = async (nearAccount: string, mapId: UserWalletMap) => {
  try {
    const near = await connect(config);

    const nearNodeInfo: NearNodeInfo = await near.connection.provider.query({
      request_type: "view_account",
      finality: "final",
      account_id: nearAccount,
    });
    console.log(nearNodeInfo.locked.slice(0,7));
    RegisterUsetWalletStaked(nearNodeInfo.locked.slice(0,7), mapId)

  } catch (error) {
    console.error(error);
  }
};
