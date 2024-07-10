// // eslint-disable-next-line no-restricted-imports
// import {
//   APPSFLYER_API_KEY,
//   APPSFLYER_APP_ID,
//   FIREBASE_APP_CHECK_DEBUG_TOKEN,
//   INFURA_KEY,
//   INFURA_PROJECT_ID,
//   MOONPAY_API_KEY,
//   MOONPAY_API_URL,
//   MOONPAY_WIDGET_API_URL,
//   ONESIGNAL_APP_ID,
//   QUICKNODE_ARBITRUM_RPC_URL,
//   QUICKNODE_BNB_RPC_URL,
//   QUICKNODE_MAINNET_RPC_URL,
//   QUICKNODE_ZKSYNC_RPC_URL,
//   QUICKNODE_ZORA_RPC_URL,
//   SENTRY_DSN,
//   SIMPLEHASH_API_KEY,
//   SIMPLEHASH_API_URL,
//   STATSIG_PROXY_URL,
//   TRADING_API_KEY,
//   UNISWAP_API_KEY,
//   WALLETCONNECT_PROJECT_ID,
// } from 'react-native-dotenv'

import { isNonJestDev } from 'utilities/src/environment/constants'

export interface Config {
  appsflyerApiKey: string
  appsflyerAppId: string
  moonpayApiKey: string
  moonpayApiUrl: string
  moonpayWidgetApiUrl: string
  uniswapApiKey: string
  infuraKey: string
  infuraProjectId: string
  onesignalAppId: string
  sentryDsn: string
  simpleHashApiKey: string
  simpleHashApiUrl: string
  statSigProxyUrl: string
  walletConnectProjectId: string
  quicknodeArbitrumRpcUrl: string
  quicknodeBnbRpcUrl: string
  quicknodeZoraRpcUrl: string
  quicknodeZkSyncRpcUrl: string
  quicknodeMainnetRpcUrl: string
  tradingApiKey: string
  firebaseAppCheckDebugToken: string
}

/**
 * Naming requirements for different environments:
 * - Web ENV vars: must have process.env.REACT_APP_<var_name>
 * - Extension ENV vars: must have process.env.<var_name>
 * - Mobile ENV vars: must have BOTH process.env.<var_name> and <var_name>
 *
 *  The CI requires web vars to have the required 'REACT_APP_' prefix. The react-dot-env library doesnt integrate with CI correctly,
 *  so we pull from github secrets directly with process.env.<var_name> for both extension and mobile. <var_name> is used for local mobile builds.
 */

const _config: Config = {
  //@ts-ignore
  appsflyerApiKey: process.env.APPSFLYER_API_KEY ,
  //@ts-ignore
  appsflyerAppId: process.env.APPSFLYER_APP_ID ,
  //@ts-ignore
  moonpayApiKey: process.env.REACT_APP_MOONPAY_PUBLISHABLE_KEY || process.env.MOONPAY_API_KEY ,
  //@ts-ignore
  moonpayApiUrl: process.env.REACT_APP_MOONPAY_API || process.env.MOONPAY_API_URL ,
  //@ts-ignore
  moonpayWidgetApiUrl: process.env.MOONPAY_WIDGET_API_URL ,
  //@ts-ignore
  uniswapApiKey: process.env.UNISWAP_API_KEY ,
  //@ts-ignore
  infuraKey: process.env.REACT_APP_INFURA_KEY ,
  //@ts-ignore
  infuraProjectId: process.env.INFURA_PROJECT_ID ,
  //@ts-ignore
  onesignalAppId: process.env.ONESIGNAL_APP_ID,
  //@ts-ignore
  sentryDsn: process.env.REACT_APP_SENTRY_DSN || process.env.SENTRY_DSN ,
  //@ts-ignore
  simpleHashApiKey: process.env.SIMPLEHASH_API_KEY ,
  //@ts-ignore
  simpleHashApiUrl: process.env.SIMPLEHASH_API_URL ,
  //@ts-ignore
  statSigProxyUrl: process.env.REACT_APP_STATSIG_PROXY_URL || process.env.STATSIG_PROXY_URL,
  //@ts-ignore
  walletConnectProjectId:
    process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID || process.env.WALLETCONNECT_PROJECT_ID ,
  //@ts-ignore
    quicknodeArbitrumRpcUrl: process.env.REACT_APP_QUICKNODE_ARBITRUM_RPC_URL ,
  //@ts-ignore
    quicknodeBnbRpcUrl:
    process.env.REACT_APP_QUICKNODE_BNB_RPC_URL || process.env.QUICKNODE_BNB_RPC_URL ,
  //@ts-ignore
    quicknodeZoraRpcUrl:
    process.env.REACT_APP_QUICKNODE_ZORA_RPC_URL || process.env.QUICKNODE_ZORA_RPC_URL ,
  //@ts-ignore
    quicknodeZkSyncRpcUrl:
    process.env.REACT_APP_QUICKNODE_ZKSYNC_RPC_URL || process.env.QUICKNODE_ZKSYNC_RPC_URL ,
  //@ts-ignore
    quicknodeMainnetRpcUrl: process.env.REACT_APP_QUICKNODE_MAINNET_RPC_URL ,
  //@ts-ignore
    tradingApiKey: process.env.TRADING_API_KEY ,
  //@ts-ignore
    firebaseAppCheckDebugToken: process.env.FIREBASE_APP_CHECK_DEBUG_TOKEN ,
}

export const config = Object.freeze(_config)

if (isNonJestDev) {
  // Cannot use logger here, causes error from circular dep
  // eslint-disable-next-line no-console
  console.debug('Using app config:', config)
}
