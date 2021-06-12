import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
 
  {
    pid: 1,
    lpSymbol: 'CAKE-MATIC LP',
    lpAddresses: {
      80001: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      137: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
    },
    token: tokens.cake,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 2,
    lpSymbol: 'USDT-MATIC LP',
    lpAddresses: {
      80001: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      137: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.usdt,
    quoteToken: tokens.wmatic,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
 
]

export default farms
