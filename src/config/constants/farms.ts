import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
 {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      80001: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      137: '0x805262b407177c3a4aa088088c571164f645c5d0',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'CAKE-MATIC LP',
    lpAddresses: {
      80001: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      137: '0x4d02bf5869fb3cfea155710d637d79afadb2cc8d',
    },
    token: tokens.cake,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 2,
    lpSymbol: 'USDC-MATIC LP',
    lpAddresses: {
      80001: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827',
    },
    token: tokens.usdc,
    quoteToken: tokens.wmatic,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
 
]

export default farms
